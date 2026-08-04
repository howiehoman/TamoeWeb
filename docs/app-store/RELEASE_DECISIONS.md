# Release decisions that still require the account holder

Resolve every item below before creating the production App Store record.

## 1. Apple Developer team and Bundle ID resolved

The final registered identity is:

- Team ID: `M7YC437JCH`
- Bundle ID: `com.howiehoman.tamoeapp`

The Xcode app, unit-test, and UI-test targets now use Howie's team. Use
`com.howiehoman.tamoeapp` when creating the App Store Connect record. Do not
upload a build under the retired development identifier.

## 2. Seller and legal provider name

Confirm the legal name shown by Howie's Apple Developer membership. This is the
seller or provider users will see on the App Store. Use that exact name for:

- App Store copyright ownership
- App Review contact details
- legal review of the Terms and Privacy Policy
- any Digital Services Act trader declaration

## 3. Public contact details

Already confirmed:

- Email: `tamoaeapp@gmail.com`

Still required privately in App Store Connect:

- App Review contact first and last name
- App Review contact phone number

If the app will be distributed in the European Union and the account holder is
a trader, Apple also requires verified public address, phone, and email details.
The account holder must assess trader status. Apple cannot make that decision
for the developer.

## 4. iPhone-only or universal app

The project currently targets both iPhone and iPad. This means a polished iPad
experience and 13-inch iPad screenshots are required.

Choose one:

- Keep iPhone and iPad support, test every core flow on iPad, and provide iPad
  screenshots.
- Release 1.0 as iPhone-only by changing Targeted Device Family to iPhone before
  uploading the first build.

Recommended for the current design: release 1.0 as iPhone-only unless the team
has completed a dedicated iPad quality pass.

## 5. Minimum iOS version

The project currently requires iOS 26.5. This sharply limits the number of
compatible devices. Confirm whether this is intentional.

- Keep iOS 26.5 if TAMOE genuinely requires APIs available only there.
- Otherwise, lower the deployment target only after building and testing every
  feature on the chosen minimum OS.

Do not change this only for marketing reach. Compatibility must be verified.

## 6. Voice-search privacy disclosure

The current `SFSpeechRecognizer` implementation may send voice audio to Apple's
servers. Choose and keep one consistent release position:

- Conservative disclosure: declare Audio Data used for App Functionality, not
  linked to identity, and not used for tracking.
- On-device-only engineering: require on-device recognition and make voice
  search unavailable where on-device recognition is unsupported, then confirm
  that no audio leaves the device before selecting Data Not Collected.

This package uses the conservative disclosure for the current code.

## 7. Commercial choices

Confirm:

- Price: recommended Free
- Primary category: recommended Lifestyle
- Secondary category: recommended Productivity
- Distribution regions
- Automatic or manual release after approval; manual release is recommended for
  version 1.0
- EU Digital Services Act trader or non-trader status

## 8. Legal review

The website now contains complete public drafts, but the account holder should
have a qualified professional confirm:

- provider identity and governing law
- consumer-law limitations
- team ownership of the TAMOE name, icon, source, screenshots, and copy
- permission to publish all guest names or sample data shown in screenshots
- whether any local business registration or public address is required
