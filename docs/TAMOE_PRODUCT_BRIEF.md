# Tamoe Product and Website Brief

## Product definition

Tamoe is an offline-first iOS wedding guest-list planner for couples managing
one or more wedding events. It is not a general wedding-planning suite.

Its key idea is simple: enter a person once, then give that guest different
details for each event. The same guest may attend an Akad or Holy Matrimony
alone, then attend the reception with family. Their category, priority, and
number of pax may therefore differ by event.

## The story behind Tamoe

Wedding guest planning often begins in notes, chats, or spreadsheets. That
works until the couple has several events and the same person appears in
different combinations. Updates become easy to miss, duplicates appear, and
headcounts stop matching venue capacity.

A useful representative story is Alya and Bima planning an Akad and a
reception. Their Aunt Maya counts as one person at the Akad but four pax at the
reception. Tamoe lets them keep Aunt Maya as one guest while representing both
event realities correctly.

The website should frame Tamoe as a calm companion that reduces this mental
load:

> Let Tamoe take care of the guest list, so you can focus on the people and
> moments that make your wedding meaningful.

## Core capabilities

- Create multiple wedding events and assign a target pax capacity to each.
- Add a guest once and assign them to one or more events.
- Store event-specific category, priority, and number of pax.
- Keep optional phone number, address, and up to ten notes for a guest.
- View all events together or focus on a single event.
- Search guests by text or speech and filter by category and priority.
- Compare actual pax against the target and see on-track or over-capacity
  status.
- Autosave add/edit guest drafts.
- Use default categories—Bride, Groom, Bride Parents, and Groom Parents—or
  create custom categories.
- Export selected events and categories to PDF, Excel, or Numbers-compatible
  XLSX files.
- Give each selected event its own PDF section or spreadsheet worksheet.
- Share exported files using the native iOS share sheet.

When a guest appears in several exported event sections, that repetition is
intentional because each section represents a different event assignment.

## Privacy facts the website must represent accurately

- Guest-list data is stored locally on the user's device with SwiftData.
- Draft and preference state uses local app storage.
- The reviewed app contains no account system, cloud sync, advertising,
  analytics, or tracking.
- Tamoe requests microphone and speech-recognition permission for voice guest
  search.
- The reviewed behavior does not persist voice recordings or transcripts.
- Export files are generated temporarily for sharing.
- The app privacy manifest declares no collected data types and no tracking,
  and lists the required UserDefaults API reason.

Do not make broader promises such as “we can never access your data” without
checking the final release build and every third-party dependency. If the
website later uses analytics, a contact-form provider, embedded media, or
cookies, the privacy policy must be updated to disclose them.

## Audience and message hierarchy

Primary audience: bride- and groom-to-be, or couples planning their wedding.

Message order for the landing page:

1. One guest list that understands every wedding event.
2. Add each person once; tailor their attendance and pax per event.
3. Keep venue capacity visible and trustworthy.
4. Search, organize, and export without moving private guest data to a service.
5. Download Tamoe from the App Store.

Avoid generic claims about budgets, vendors, seating charts, invitations, or
RSVP collection. Those are not current Tamoe features.

## Design direction

Tamoe should feel warm, calm, editorial, and unmistakably native to the Apple
ecosystem. The website may be more expressive than the app, but it should use
the same visual language.

### Core colors

| Token | Value | Use |
| --- | --- | --- |
| Primary text | `#49360B` | Main text and strong controls |
| Accent | `#BE916A` | Highlights and primary actions |
| Page background | `#FEFDF8` | Main warm canvas |
| Field background | `#E7DFCE` | Subtle surfaces and form fields |
| Guest card | `#F8F5EE` | Cards and grouped content |

### Typography and shape

- Use a New York-style serif for the Tamoe wordmark, editorial titles, and
  emotionally important statements.
- Use SF Pro or a system sans-serif for navigation, controls, forms, and dense
  information.
- Base spacing on 4, 8, 12, 16, 24, and 32 pixels.
- Use rounded corners around 12, 16, and 22 pixels.
- Keep animation restrained, fluid, and respectful of Reduce Motion.
- The iOS app currently supports light mode only, so the first website version
  should prioritize the light palette instead of inventing an unrelated dark
  theme.

## Recommended information architecture

### Landing page

- Navigation: Tamoe mark, Story, Features, Privacy, FAQ, Support, Download
- Hero: clear product promise, App Store button, and iPhone product visual
- Background story: the multi-event guest-list problem
- Differentiator: one guest with different details per event
- Features: events, capacity, organization, search, and exports
- Privacy section: local-first explanation in plain language
- FAQ preview
- Final App Store call to action
- Footer: About, Support, Privacy, Terms, copyright, and contact email

### Supporting pages

- About: product motivation and team
- Support: email, response expectation, version/device details to include, and
  troubleshooting
- FAQ: data storage, device changes, voice search, exports, event limits, and
  supported formats
- Privacy: app data practices plus any separate website practices
- Terms: acceptance, permitted use, intellectual property, disclaimers,
  limitations of liability, termination, changes, governing law, contact, and
  copyright

## Content and technical constraints

- The public site should not require sign-in.
- Keep product and legal copy in the repository; a CMS is unnecessary for the
  initial release.
- Prefer a `mailto:` support action if the goal is truly to collect no data on
  the website.
- If a managed contact form is introduced later, document its processor,
  retention, and privacy impact.
- App Store links, support email, entity name, jurisdiction, and effective
  dates must be confirmed before publication.
- Legal pages should be treated as public product documents, not hidden in
  modal dialogs.

## Suggested AI website-builder prompt

Build a polished, responsive landing and support website for **Tamoe**, an
offline-first iOS wedding guest-list planner for couples managing multiple
wedding events.

Tamoe's defining feature is that a guest is entered once but may have different
attendance details for every event—including category, priority, and number of
pax. For example, Aunt Maya may count as one pax at the Akad and four pax at
the reception. The app helps couples create events, set target capacity, search
and filter guests, see actual versus target pax, and export selected event
lists to PDF, Excel, or Numbers-compatible files.

Create these public routes: Home, About, FAQ, Support, Privacy Policy, and Terms
of Service. The home page should include navigation, a strong hero with an App
Store call to action, the background story, the one-guest/multiple-events
explanation, feature highlights, a local-first privacy section, FAQ preview,
final download call to action, and a complete legal/support footer.

Use a warm, calm, editorial design inspired by the iOS app. Set the main colors
to primary text `#49360B`, accent `#BE916A`, page background `#FEFDF8`, field
background `#E7DFCE`, and card background `#F8F5EE`. Pair an elegant
New York-style serif for brand moments and headings with SF Pro or a system
sans-serif for functional text. Use generous whitespace, rounded 12–22 px
surfaces, subtle depth, and restrained motion with Reduce Motion support.
Prioritize accessibility, semantic HTML, keyboard use, contrast, responsive
layouts, SEO metadata, Open Graph images, and fast loading.

Implement it as a static-first React and TypeScript site with no database,
authentication, application API, analytics, trackers, or marketing cookies.
Keep the content in version-controlled local files. Use an email link for
support unless a form provider is explicitly approved. Do not claim that Tamoe
supports budgets, vendors, seating charts, invitations, or RSVP collection.

The privacy page must clearly distinguish app behavior from website behavior.
For the reviewed app: guest data stays on the device; there is no account,
cloud sync, analytics, or tracking; microphone and speech recognition are used
only for voice guest search; recordings and transcripts are not persisted; and
exports are temporary files prepared for sharing. Include placeholders for the
official support email, legal entity, effective dates, jurisdiction, and App
Store URL. Label all legal copy as a draft requiring professional review.

The closing message should be: “Let Tamoe take care of the guest list, so you
can focus on the people and moments that make your wedding meaningful.”
