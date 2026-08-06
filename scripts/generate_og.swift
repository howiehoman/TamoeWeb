import AppKit
import Foundation
import ImageIO

private let canvasWidth = 1200
private let canvasHeight = 630
private let left: CGFloat = 72
private let right: CGFloat = 1128

private func color(_ hex: UInt32, alpha: CGFloat = 1) -> NSColor {
    NSColor(
        calibratedRed: CGFloat((hex >> 16) & 0xff) / 255,
        green: CGFloat((hex >> 8) & 0xff) / 255,
        blue: CGFloat(hex & 0xff) / 255,
        alpha: alpha
    )
}

private func newYorkFont(size: CGFloat, weight: NSFont.Weight) -> NSFont {
    let systemFont = NSFont.systemFont(ofSize: size, weight: weight)
    guard let descriptor = systemFont.fontDescriptor.withDesign(.serif) else {
        return systemFont
    }
    return NSFont(descriptor: descriptor, size: size) ?? systemFont
}

private func drawText(
    _ text: String,
    top: CGFloat,
    x: CGFloat,
    width: CGFloat,
    height: CGFloat,
    font: NSFont,
    color: NSColor,
    lineHeightMultiple: CGFloat = 1
) {
    let paragraph = NSMutableParagraphStyle()
    paragraph.lineBreakMode = .byWordWrapping
    paragraph.lineHeightMultiple = lineHeightMultiple
    let attributes: [NSAttributedString.Key: Any] = [
        .font: font,
        .foregroundColor: color,
        .paragraphStyle: paragraph,
    ]
    NSAttributedString(string: text, attributes: attributes).draw(
        with: NSRect(
            x: x,
            y: CGFloat(canvasHeight) - top - height,
            width: width,
            height: height
        ),
        options: [.usesLineFragmentOrigin, .usesFontLeading]
    )
}

let fileManager = FileManager.default
let repository = URL(
    fileURLWithPath: fileManager.currentDirectoryPath,
    isDirectory: true
)
let wordmarkURL = repository.appendingPathComponent("public/tamoe-wordmark.png")
let appScreenURL = repository.appendingPathComponent("public/app-screens/01-all-events.png")
let outputURL = repository.appendingPathComponent("public/og.png")

guard
    let wordmarkSource = CGImageSourceCreateWithURL(wordmarkURL as CFURL, nil),
    let wordmark = CGImageSourceCreateImageAtIndex(wordmarkSource, 0, nil),
    let appScreen = NSImage(contentsOf: appScreenURL)
else {
    throw NSError(
        domain: "TAMOEOpenGraph",
        code: 1,
        userInfo: [NSLocalizedDescriptionKey: "Could not load TAMOE brand assets"]
    )
}

guard
    let bitmap = NSBitmapImageRep(
        bitmapDataPlanes: nil,
        pixelsWide: canvasWidth,
        pixelsHigh: canvasHeight,
        bitsPerSample: 8,
        samplesPerPixel: 4,
        hasAlpha: true,
        isPlanar: false,
        colorSpaceName: .deviceRGB,
        bytesPerRow: 0,
        bitsPerPixel: 32
    ),
    let context = NSGraphicsContext(bitmapImageRep: bitmap)
else {
    throw NSError(
        domain: "TAMOEOpenGraph",
        code: 2,
        userInfo: [NSLocalizedDescriptionKey: "Could not create Open Graph canvas"]
    )
}

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = context
context.imageInterpolation = .high

let canvas = NSRect(x: 0, y: 0, width: canvasWidth, height: canvasHeight)
NSGradient(
    starting: color(0xFEFDF8),
    ending: color(0xE7DFCE)
)?.draw(in: canvas, angle: 84)

color(0xBE916A, alpha: 0.12).setFill()
NSBezierPath(ovalIn: NSRect(x: 890, y: 350, width: 430, height: 430)).fill()
color(0x49360B, alpha: 0.05).setFill()
NSBezierPath(ovalIn: NSRect(x: -170, y: -210, width: 440, height: 440)).fill()

let wordmarkWidth: CGFloat = 190
let wordmarkHeight = wordmarkWidth * CGFloat(wordmark.height) / CGFloat(wordmark.width)
context.cgContext.draw(
    wordmark,
    in: NSRect(
        x: left,
        y: CGFloat(canvasHeight) - 64 - wordmarkHeight,
        width: wordmarkWidth,
        height: wordmarkHeight
    )
)

drawText(
    "Every Guest.\nPerfectly Organized.",
    top: 148,
    x: left,
    width: 650,
    height: 280,
    font: newYorkFont(size: 72, weight: .semibold),
    color: color(0x49360B),
    lineHeightMultiple: 0.9
)

drawText(
    "One shared guest list across every celebration.",
    top: 454,
    x: left,
    width: 610,
    height: 54,
    font: NSFont.systemFont(ofSize: 25, weight: .regular),
    color: color(0x6F6248)
)

color(0x49360B, alpha: 0.14).setFill()
NSBezierPath(rect: NSRect(x: left, y: 86, width: 610, height: 2)).fill()

let screenWidth: CGFloat = 344
let screenHeight = screenWidth * appScreen.size.height / appScreen.size.width
let screenRect = NSRect(
    x: right - screenWidth,
    y: -72,
    width: screenWidth,
    height: screenHeight
)
let frameRect = screenRect.insetBy(dx: -9, dy: -9)

NSGraphicsContext.saveGraphicsState()
let shadow = NSShadow()
shadow.shadowColor = color(0x49360B, alpha: 0.24)
shadow.shadowBlurRadius = 32
shadow.shadowOffset = NSSize(width: -7, height: -12)
shadow.set()
color(0xFEFDF8).setFill()
NSBezierPath(roundedRect: frameRect, xRadius: 56, yRadius: 56).fill()
NSGraphicsContext.restoreGraphicsState()

NSGraphicsContext.saveGraphicsState()
NSBezierPath(roundedRect: screenRect, xRadius: 48, yRadius: 48).addClip()
appScreen.draw(
    in: screenRect,
    from: NSRect(origin: .zero, size: appScreen.size),
    operation: .sourceOver,
    fraction: 1,
    respectFlipped: true,
    hints: [.interpolation: NSImageInterpolation.high]
)
NSGraphicsContext.restoreGraphicsState()

color(0x49360B, alpha: 0.12).setStroke()
let frameBorder = NSBezierPath(roundedRect: frameRect, xRadius: 56, yRadius: 56)
frameBorder.lineWidth = 2
frameBorder.stroke()

context.flushGraphics()
NSGraphicsContext.restoreGraphicsState()

guard let data = bitmap.representation(using: .png, properties: [:]) else {
    throw NSError(
        domain: "TAMOEOpenGraph",
        code: 3,
        userInfo: [NSLocalizedDescriptionKey: "Could not encode Open Graph image"]
    )
}

try data.write(to: outputURL)
print("Created \(outputURL.path)")
