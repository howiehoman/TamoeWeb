# App Review information

## Contact

- First name: `[account holder or release contact]`
- Last name: `[release contact last name]`
- Email: `tamoaeapp@gmail.com`
- Phone: `[working phone number with country code]`

## Sign-in information

Sign-in required: **No**

TAMOE has no account system. No username or password is required.

## Notes to paste into App Store Connect

TAMOE is a local-first wedding guest-list planner. It has no account, login,
subscription, in-app purchase, advertising, or tracking. Guest-list records are
stored locally on the device.

Suggested review flow:

1. Launch the app and continue through onboarding.
2. Add at least one wedding celebration and enter its target guest capacity.
3. From the dashboard, use the plus button to add a guest.
4. Enable one or more celebrations for the guest, then set Number of Pax,
   Category, and Priority Level. Guest notes are optional.
5. Return to the dashboard to search and filter the list.
6. Open the dashboard overflow menu to access Export and About & Support.
7. Export allows selected celebrations and categories to be prepared as PDF or
   XLSX and then opens the standard iOS share sheet.

The microphone button in Search is optional. When tapped, the app requests
Microphone and Speech Recognition permissions to convert a spoken guest name
into search text using Apple's Speech framework. Typed search remains available
if permission is denied. The app does not retain audio recordings.

About & Support contains working links to the support page, Privacy Policy,
Terms of Service, website, and support email.

No special hardware, external accessory, demo account, or review attachment is
required.

## If review asks about encryption

TAMOE does not implement custom encryption. The project sets
`ITSAppUsesNonExemptEncryption` to false. It relies only on ordinary Apple
platform and App Store services. Confirm this remains accurate for the exact
binary under review.
