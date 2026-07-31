# Tamoe Product and Website Brief

## Product definition

Tamoe is an offline-first iPhone guest-list planner for couples organizing a
wedding with one or more celebrations. It is intentionally focused on guests,
not general wedding project management.

The central idea is simple: add a person once, then choose every celebration
they will attend. Keep Number of Pax, category, Priority Level, and notes
connected to that guest so the list stays understandable as plans change.

## The story behind Tamoe

Wedding guest planning often begins in notes, chats, or spreadsheets. That
works until the same names need to appear across a ceremony, reception, and
surrounding celebrations. Duplicate rows emerge, updates are missed, and the
headcount becomes difficult to trust.

The deeper problem is relational. Couples can face conflict with one another,
their parents, and future in-laws when each person has different expectations
about who should be included. Tamoe shows the guest total beside the agreed
quota so the people involved can review the same facts, understand trade-offs,
and take ownership of the decision.

Tamoe brings those moving parts into one clear, visual list. A couple can find
Aunt Jane once, see the celebrations she attends, keep her Number of Pax and
category clear, and mark the Priority Level as Must Invite, Maybe, or
Optional.

Exports also bridge the couple and wedding vendors. The organized guest list
can be shared as Excel, PDF, or Numbers files for practical coordination.

The website should frame Tamoe as a thoughtful companion:

> Let Tamoe care for the guest list, so you can focus on the people and moments
> that make your wedding meaningful.

## Core capabilities

- Create multiple wedding celebrations and assign a target guest capacity.
- Add a guest once and include them in one or more celebrations.
- Store a guest name with optional phone number, address, and notes.
- Set Number of Pax, category, and Priority Level.
- Use Must Invite, Maybe, and Optional to make planning decisions visible.
- View the total against the target and see an on-track or over-capacity state.
- Search guests by text or speech.
- Filter guests by celebration, category, or Priority Level.
- Use categories such as Bride's, Bride Parents, and Groom Parents.
- Export selected celebrations and categories to PDF, Excel, or
  Numbers-compatible files.
- Share exported files using the native iOS share sheet.

Tamoe does not currently send invitations or collect responses. Invitation
statuses are internal planning labels.

## Privacy facts

- Guest-list data is stored locally on the user's device with SwiftData.
- Draft and preference state uses local app storage.
- The reviewed app contains no account system, cloud sync, advertising,
  analytics, or tracking.
- Microphone and speech-recognition permission support optional voice search.
- The reviewed behavior does not persist voice recordings or transcripts.
- Export files are generated temporarily for sharing.

The website must not make broader guarantees without checking the submitted
App Store build and all dependencies. If the site later adds analytics, forms,
embedded media, or cookies, the privacy policy must be updated.

## Message hierarchy

1. Every guest, thoughtfully planned.
2. One guest record across every celebration they attend.
3. Number of Pax, category, and Priority Level stay visible.
4. The target headcount is always easy to understand.
5. Private guest data remains on the iPhone.
6. Download Tamoe from the App Store.

Avoid claims about budgets, vendors, seating charts, invitation sending, or
response collection; these are not current Tamoe features.

## Design direction

Tamoe should feel warm, considered, editorial, and native to the Apple ecosystem.
The website can be expressive while staying faithful to the app.

| Token | Value | Use |
| --- | --- | --- |
| Primary text | `#49360B` | Main text and strong controls |
| Accent | `#BE916A` | Highlights and primary actions |
| Page background | `#FEFDF8` | Main warm canvas |
| Field background | `#E7DFCE` | Subtle surfaces and form fields |
| Guest card | `#F8F5EE` | Cards and grouped content |

- Use an editorial serif for brand moments and headings.
- Use SF Pro or a system sans-serif for navigation and functional text.
- Use generous whitespace and rounded 12–22 px surfaces.
- Keep 3D motion fluid and restrained.
- Respect Reduce Motion.
- Prioritize the light palette used by the iPhone app.

## Public website

Required routes:

- Home: product promise, iPhone preview, story, workflow, features,
  privacy, FAQ preview, and App Store call to action
- About: product motivation and team context
- FAQ: capabilities, local storage, search, exports, and device migration
- Support: email and troubleshooting guidance
- Privacy: app and website data practices
- Terms: acceptance, permitted use, intellectual property, disclaimers,
  limitations of liability, governing law, contact, and copyright

## Technical constraints

- Next.js, React, and TypeScript
- Static-first pages deployed to Vercel
- No database, account system, application API, analytics, or marketing cookies
- Product and legal copy stored in the repository
- Email support through a `mailto:` link
- Accessible semantic HTML, responsive layout, SEO metadata, and fast assets

Before App Store release, confirm the support email, legal entity, governing
jurisdiction, final effective dates, and App Store URL. Legal copy requires
professional review.

## Team

Tamoe is created at Apple Developer Academy by Howie Homan, Ivana Grasielda,
Hansel Meinhard, Nicole Wahyudi, and Ricky Tjahjono.
