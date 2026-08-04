# Publish TAMOE to the iOS App Store

This tutorial assumes the app is new and has never been released.

## Phase 1: Prepare the Apple Developer account

1. Sign in to https://developer.apple.com/account with Howie's Apple ID.
2. Confirm the Apple Developer Program membership is active.
3. In App Store Connect, open Business and accept any pending agreements. The
   Account Holder must accept required agreements before a new app can be
   created or submitted.
4. Confirm the account's legal seller name and Team ID.
5. Complete the Digital Services Act declaration. If distributing in the EU,
   decide whether the account holder is a trader and complete Apple's required
   identity verification.

## Phase 2: Register TAMOE's App ID

1. Open Certificates, Identifiers & Profiles in the developer account.
2. Select Identifiers, then add a new App ID.
3. Choose App, then an explicit Bundle ID.
4. Enter description `TAMOE`.
5. Enter the registered Bundle ID: `com.howiehoman.tamoeapp`.
6. Register it.

TAMOE does not currently need special capabilities such as Sign in with Apple,
Push Notifications, iCloud, HealthKit, or In-App Purchase.

## Phase 3: Fix signing in Xcode

1. Open `TamoeApp.xcodeproj` in Xcode.
2. Select the TAMOE project, then the TamoeApp target.
3. Open Signing & Capabilities.
4. Keep Automatically manage signing enabled.
5. Select Howie's Apple Developer team.
6. Enter the exact Bundle ID registered in Phase 2.
7. Confirm Release configuration uses the same team and Bundle ID.
8. Confirm Version is `1.0` and Build is `1`.
9. Decide whether Targeted Device Family is iPhone only or iPhone and iPad.
10. Confirm the minimum iOS version.

The test target identifiers do not appear on the App Store, but Xcode should be
able to sign them with the selected development team when running tests.

## Phase 4: Create the App Store Connect record

1. Go to https://appstoreconnect.apple.com.
2. Open Apps and select the plus button, then New App.
3. Platform: iOS.
4. Name: `TAMOE`.
5. Primary language: English (U.S.), unless the team selects another primary
   language.
6. Bundle ID: select the exact identifier from Phase 2.
7. SKU: `TAMOE-IOS-001`.
8. User access: Full Access unless the team needs restrictions.
9. Create the app record.

The Bundle ID cannot be changed after a build is uploaded. Confirm it before
the first upload.

## Phase 5: Complete app-level information

In App Information:

1. Name: `TAMOE`.
2. Subtitle: copy from `APP_STORE_METADATA.md`.
3. Primary category: Lifestyle.
4. Secondary category: Productivity.
5. Content Rights: confirm TAMOE owns or has permission for every asset and any
   sample content shown.
6. Age Rating: complete the questionnaire. Based on the audited feature set,
   TAMOE should ordinarily receive 4+ if every objectionable-content answer is
   None and no additional capability changes are made.
7. License Agreement: use Apple's Standard EULA. Do not paste the website Terms
   as a custom EULA unless legal counsel adapts it to Apple's minimum terms.
8. Privacy Policy URL: `https://tamoe-web.vercel.app/privacy`.
9. Complete the App Privacy questionnaire using `APP_PRIVACY_ANSWERS.md`.

## Phase 6: Prepare the version page

On the iOS 1.0 version page, paste:

- Promotional Text, Description, and Keywords from `APP_STORE_METADATA.md`
- Support URL: `https://tamoe-web.vercel.app/support`
- Marketing URL: `https://tamoe-web.vercel.app`
- Copyright: `2026 [confirmed legal owner name]`
- App Review contact name, `tamoaeapp@gmail.com`, and a working phone number
- App Review notes from `APP_REVIEW_NOTES.md`

Upload screenshots from the plan in `SCREENSHOT_PLAN.md`. Screenshots must show
the submitted app, use non-sensitive dummy data, and contain no alpha channel.

## Phase 7: Build and test the release candidate

1. Install the app fresh on at least one physical iPhone.
2. Complete onboarding.
3. Test adding, editing, moving, filtering, and deleting guests.
4. Test multiple events, custom categories, all Priority Levels, notes, and
   Number of Pax totals.
5. Grant and deny microphone and speech permissions in separate tests.
6. Test PDF and XLSX exports and open the files in suitable apps.
7. Test offline use, relaunch, device rotation if supported, Dynamic Type,
   VoiceOver, and Reduce Motion.
8. Open About & Support from the dashboard menu and verify every public URL and
   the email link.
9. Run all automated tests with the Release candidate source.
10. Remove debug-only sample data and confirm a normal Release build starts
    with the intended onboarding state.

Use TestFlight with the team before App Review. TestFlight uses the same uploaded
build pipeline and is the best final check of signing, permissions, privacy
links, and installation behavior.

## Phase 8: Archive and upload

1. In Xcode, select Any iOS Device (arm64) or a connected physical device as
   the destination.
2. Select Product, then Archive.
3. In Organizer, select the archive.
4. Select Validate App and resolve every error or warning that affects release.
5. Select Distribute App, App Store Connect, Upload.
6. Keep the automatic signing and symbol-upload choices unless the team has a
   specific reason to change them.
7. Wait for processing in App Store Connect.
8. On the iOS 1.0 page, select the processed build.
9. Answer export-compliance questions. The current project declares that it
   does not use non-exempt encryption and contains no custom encryption code.
   Confirm that remains true for the uploaded binary.

Every upload needs a unique build number. If build 1 is rejected at upload or
must be replaced, increment the build number to 2 before the next archive.

## Phase 9: Submit for review

1. Recheck all required fields and unresolved warnings.
2. Choose Manual release for the first version unless the team wants immediate
   publication after approval.
3. Select Add for Review.
4. Review the Draft Submission.
5. Select Submit for Review.
6. Monitor App Review messages in App Store Connect and reply with precise test
   steps if Apple asks questions.

Do not make the public release until the website, support email, Privacy Policy,
Terms, and app links are live and match the uploaded build.
