import AppKit
import Foundation

guard CommandLine.arguments.count == 3 else {
    fputs("Usage: prepare_wordmark.swift <source.png> <output.png>\n", stderr)
    exit(2)
}

let sourceURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])

guard
    let sourceImage = NSImage(contentsOf: sourceURL),
    let sourceCGImage = sourceImage.cgImage(forProposedRect: nil, context: nil, hints: nil)
else {
    fputs("Could not read source wordmark.\n", stderr)
    exit(1)
}

let width = sourceCGImage.width
let height = sourceCGImage.height
let colorSpace = CGColorSpaceCreateDeviceRGB()
let bytesPerRow = width * 4
let sourcePixels = UnsafeMutablePointer<UInt8>.allocate(capacity: bytesPerRow * height)
sourcePixels.initialize(repeating: 0, count: bytesPerRow * height)
defer { sourcePixels.deallocate() }

guard let sourceContext = CGContext(
    data: sourcePixels,
    width: width,
    height: height,
    bitsPerComponent: 8,
    bytesPerRow: bytesPerRow,
    space: colorSpace,
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
    fputs("Could not create source bitmap.\n", stderr)
    exit(1)
}

sourceContext.interpolationQuality = .high
sourceContext.draw(sourceCGImage, in: CGRect(x: 0, y: 0, width: width, height: height))

func pixel(atX x: Int, y: Int) -> (Double, Double, Double, Double) {
    let offset = y * bytesPerRow + x * 4
    return (
        Double(sourcePixels[offset]),
        Double(sourcePixels[offset + 1]),
        Double(sourcePixels[offset + 2]),
        Double(sourcePixels[offset + 3])
    )
}

let cornerSize = min(48, min(width, height) / 8)
var background = [Double](repeating: 0, count: 3)
var backgroundSamples = 0.0

for cornerY in [0, height - cornerSize] {
    for cornerX in [0, width - cornerSize] {
        for y in cornerY..<(cornerY + cornerSize) {
            for x in cornerX..<(cornerX + cornerSize) {
                let p = pixel(atX: x, y: y)
                background[0] += p.0
                background[1] += p.1
                background[2] += p.2
                backgroundSamples += 1
            }
        }
    }
}

background = background.map { $0 / backgroundSamples }

var textColor = [Double](repeating: 0, count: 3)
var darkestLuminance = Double.greatestFiniteMagnitude
var minX = width
var maxX = 0
var minY = height
var maxY = 0

for y in 0..<height {
    for x in 0..<width {
        let p = pixel(atX: x, y: y)
        let delta = max(
            abs(p.0 - background[0]),
            abs(p.1 - background[1]),
            abs(p.2 - background[2])
        )

        if delta > 8, p.3 > 8 {
            minX = min(minX, x)
            maxX = max(maxX, x)
            minY = min(minY, y)
            maxY = max(maxY, y)
        }

        let luminance = 0.2126 * p.0 + 0.7152 * p.1 + 0.0722 * p.2
        if p.3 > 240, luminance < darkestLuminance {
            darkestLuminance = luminance
            textColor = [p.0, p.1, p.2]
        }
    }
}

guard minX <= maxX, minY <= maxY else {
    fputs("No visible wordmark pixels found.\n", stderr)
    exit(1)
}

let padding = 12
minX = max(0, minX - padding)
minY = max(0, minY - padding)
maxX = min(width - 1, maxX + padding)
maxY = min(height - 1, maxY + padding)

let outputWidth = maxX - minX + 1
let outputHeight = maxY - minY + 1
let outputBytesPerRow = outputWidth * 4
let outputPixels = UnsafeMutablePointer<UInt8>.allocate(
    capacity: outputBytesPerRow * outputHeight
)
outputPixels.initialize(repeating: 0, count: outputBytesPerRow * outputHeight)
defer { outputPixels.deallocate() }

for outputY in 0..<outputHeight {
    for outputX in 0..<outputWidth {
        let source = pixel(atX: minX + outputX, y: minY + outputY)
        let channels = [source.0, source.1, source.2]
        var alphaCandidates: [Double] = []

        for channel in 0..<3 {
            let denominator = textColor[channel] - background[channel]
            if abs(denominator) > 10 {
                alphaCandidates.append(
                    (channels[channel] - background[channel]) / denominator
                )
            }
        }

        let reconstructedAlpha = alphaCandidates.isEmpty
            ? 0
            : alphaCandidates.reduce(0, +) / Double(alphaCandidates.count)
        let alpha = max(0, min(1, reconstructedAlpha)) * (source.3 / 255)
        let outputOffset = outputY * outputBytesPerRow + outputX * 4

        outputPixels[outputOffset] = UInt8(max(0, min(255, textColor[0] * alpha)))
        outputPixels[outputOffset + 1] = UInt8(max(0, min(255, textColor[1] * alpha)))
        outputPixels[outputOffset + 2] = UInt8(max(0, min(255, textColor[2] * alpha)))
        outputPixels[outputOffset + 3] = UInt8(max(0, min(255, 255 * alpha)))
    }
}

guard
    let outputContext = CGContext(
        data: outputPixels,
        width: outputWidth,
        height: outputHeight,
        bitsPerComponent: 8,
        bytesPerRow: outputBytesPerRow,
        space: colorSpace,
        bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    ),
    let outputCGImage = outputContext.makeImage()
else {
    fputs("Could not create output bitmap.\n", stderr)
    exit(1)
}

let outputRepresentation = NSBitmapImageRep(cgImage: outputCGImage)
guard let outputData = outputRepresentation.representation(using: .png, properties: [:]) else {
    fputs("Could not encode output PNG.\n", stderr)
    exit(1)
}

try FileManager.default.createDirectory(
    at: outputURL.deletingLastPathComponent(),
    withIntermediateDirectories: true
)
try outputData.write(to: outputURL)

print("Created \(outputURL.path) at \(outputWidth)x\(outputHeight)")
