# TAMOE 1.0 release checklist

## Ownership and account

- [ ] Apple Developer Program membership is active.
- [ ] Required App Store Connect agreements are accepted.
- [ ] Legal seller and copyright owner names are confirmed.
- [ ] Final Bundle ID belongs to the submitting team.
- [ ] Xcode app target Team and Bundle ID match App Store Connect.
- [ ] EU Digital Services Act trader status is completed.
- [ ] Distribution countries or regions are selected.

## App configuration

- [ ] App name is `TAMOE` in App Store Connect.
- [ ] Home screen display name is intentionally chosen.
- [ ] Version is `1.0` and the uploaded build number is unique.
- [ ] Minimum iOS version is intentional and tested.
- [ ] iPhone-only or iPhone and iPad support is intentional.
- [ ] All supported orientations work correctly.
- [ ] App icon is crisp, opaque, and correct at 1024 by 1024.
- [ ] Release build contains no debug menu, placeholder, or unintended sample
      data.
- [ ] `ITSAppUsesNonExemptEncryption` remains accurate.
- [ ] Privacy manifest matches the final binary and App Privacy answers.

## Functional testing

- [ ] Fresh install completes onboarding.
- [ ] Relaunch preserves the completed plan.
- [ ] Events can be added, renamed, reordered, edited, and safely removed.
- [ ] Guests can be added and edited across multiple celebrations.
- [ ] Number of Pax totals and capacity state are correct.
- [ ] Category and Priority Level filters are correct.
- [ ] Guest-specific notes save and display correctly.
- [ ] Text search works.
- [ ] Voice search works when permission is granted.
- [ ] Denied microphone or speech permission fails gracefully.
- [ ] PDF export opens and has readable page breaks.
- [ ] XLSX export opens in Excel and Apple Numbers.
- [ ] Share sheet works and temporary exports do not expose unrelated data.
- [ ] Delete actions and destructive confirmations behave correctly.
- [ ] App works without a network except for features clearly requiring Apple
      services or external links.
- [ ] All automated tests pass against the release candidate.
- [ ] TestFlight build has been installed and tested by the team.

## Accessibility and quality

- [ ] VoiceOver can complete onboarding, guest creation, filtering, and export.
- [ ] Larger Text does not hide content or actions.
- [ ] Information is not communicated by color alone.
- [ ] Contrast is sufficient.
- [ ] Reduce Motion is respected.
- [ ] Tap targets and control labels are clear.
- [ ] No crashes, hangs, clipped text, broken links, or placeholder copy remain.

## Website and legal

- [ ] Marketing URL is live.
- [ ] Support URL is live and shows `tamoaeapp@gmail.com`.
- [ ] Privacy Policy URL is live and matches the final app.
- [ ] Privacy Policy is accessible inside the app.
- [ ] Terms of Service URL is live and accessible inside the app.
- [ ] Legal provider identity and governing-law language have been reviewed.
- [ ] Team owns or has permission for the TAMOE name, icon, fonts, screenshots,
      code, and all marketing assets.
- [ ] Website and screenshot dummy data do not identify real guests without
      permission.

## App Store metadata

- [ ] Name and subtitle fit Apple's 30-character limits.
- [ ] Promotional text is 170 characters or fewer.
- [ ] Description is accurate and 4000 characters or fewer.
- [ ] Keywords are 100 bytes or fewer and contain no competitor names.
- [ ] Primary and secondary categories are correct.
- [ ] Age Rating questionnaire is complete.
- [ ] Content Rights answer is complete.
- [ ] App Privacy answers match the final build.
- [ ] Support, marketing, and privacy URLs use HTTPS.
- [ ] Copyright uses the confirmed legal owner name.
- [ ] App Review contact name, email, and phone are complete.
- [ ] Review Notes provide clear test steps and permission behavior.
- [ ] Screenshots show the actual submitted app and meet exact pixel sizes.

## Upload and submission

- [ ] Release archive builds successfully.
- [ ] Xcode validation has no unresolved release issue.
- [ ] Symbols are included in the upload.
- [ ] Build finishes processing in App Store Connect.
- [ ] Correct build is selected on iOS version 1.0.
- [ ] Export-compliance answer matches the binary.
- [ ] Manual release is selected for version 1.0, if desired.
- [ ] Submission is added for review and submitted.
- [ ] The team is ready to answer App Review messages promptly.
- [ ] After approval, the product page is checked before manual release.
