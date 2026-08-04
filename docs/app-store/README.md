# TAMOE App Store submission package

Prepared for the first iOS release on August 4, 2026.

Use these files in this order:

1. [Release decisions](RELEASE_DECISIONS.md)
2. [Submission tutorial](SUBMISSION_TUTORIAL.md)
3. [App Store metadata](APP_STORE_METADATA.md)
4. [App Privacy answers](APP_PRIVACY_ANSWERS.md)
5. [App Review notes](APP_REVIEW_NOTES.md)
6. [Screenshot plan](SCREENSHOT_PLAN.md)
7. [Final release checklist](RELEASE_CHECKLIST.md)

Public URLs:

- Marketing: https://tamoe-web.vercel.app
- Support: https://tamoe-web.vercel.app/support
- Privacy Policy: https://tamoe-web.vercel.app/privacy
- Terms of Service: https://tamoe-web.vercel.app/terms
- Support email: tamoaeapp@gmail.com

## Current technical audit

- App version: `1.0`
- Build number: `1`
- App icon: valid 1024 by 1024 PNG in the AppIcon asset catalog
- Storage: local SwiftData and local app preferences
- Accounts: none
- Advertising and analytics SDKs: none found
- Tracking: none found
- Exports: local PDF and XLSX files shared through the iOS share sheet
- Permissions: microphone and speech recognition for optional voice search
- Privacy manifest: tracking is false; Audio Data is declared for optional
  speech search; UserDefaults required-reason API is declared
- Encryption declaration: `ITSAppUsesNonExemptEncryption` is false
- Deployment target: iOS 26.5
- Supported device families: iPhone and iPad

## Important limitation

These materials are a practical release draft based on the current source code
and Apple's current submission documentation. They are not legal advice. The
App Store account holder must confirm the legal provider name, jurisdiction,
public contact details, distribution regions, and privacy answers for the exact
binary submitted to Apple.
