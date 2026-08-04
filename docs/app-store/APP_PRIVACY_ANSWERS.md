# App Privacy answers for the current TAMOE build

These answers are for the audited source as of August 4, 2026. Re-audit them if
the release build adds analytics, crash reporting, accounts, cloud sync, ads,
remote APIs, or any new SDK.

## Tracking

- Does the app or its third-party partners use data for tracking? **No**
- Does the app use the Advertising Identifier? **No**
- Does the app show third-party advertising? **No**

## Data stored only on the device

Do not list the following as developer-collected data while it remains only on
the user's device:

- guest names
- phone numbers
- addresses
- notes
- celebration assignments
- categories
- Priority Levels
- Number of Pax
- local drafts and preferences
- export files created locally at the user's request

Apple's App Privacy guidance does not treat data processed only on the device as
collected for the nutrition label.

## Voice-search audio

The current app uses `SFSpeechRecognizer`. Apple documents that this can send
captured voice audio to Apple's servers. Use this conservative declaration in
App Store Connect for the current implementation:

1. Select **Yes, data is collected from this app**.
2. Select **User Content**.
3. Select **Audio Data**.
4. Purpose: **App Functionality** only.
5. Is the data linked to the user's identity? **No**.
6. Is the data used for tracking? **No**.

The app does not keep audio recordings and does not retain voice transcripts as
guest records. The Privacy Policy explains the Apple speech processing.

If the implementation is changed and verified to require on-device recognition
for every supported device and language, re-evaluate whether **Data Not
Collected** is accurate before submission.

## Privacy manifest consistency

The current privacy manifest declares:

- tracking: false
- tracked domains: none
- required-reason API: UserDefaults with reason `CA92.1`
- Audio Data for App Functionality, not linked to identity, not used for tracking

Before the final archive, generate Xcode's privacy report and confirm the
manifest, App Store Connect answer, and exact speech implementation remain
consistent with current Apple guidance.

## Permissions

- Microphone: optional voice guest search
- Speech Recognition: converts spoken guest names into search text

Permissions are requested only when the user invokes voice search. Typed search
and the rest of the app must remain usable when either permission is denied.

## Website privacy is separate

App Store privacy answers describe the iOS app, not the marketing website. The
public Privacy Policy separately discloses support email handling and Vercel
infrastructure logs.
