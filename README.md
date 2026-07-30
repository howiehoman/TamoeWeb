# Tamoe Website

The separate public website for **Tamoe**, an offline-first iOS wedding
guest-list planner.

This repository is intentionally separate from the Swift app in `../TamoeApp`.
The website is a content-led landing and support site. It does not need its own
database, account system, or application backend.

## Recommended stack

- Next.js-compatible React and TypeScript
- Static-first pages with no application API
- Tailwind CSS plus Tamoe design tokens as CSS custom properties
- Local, version-controlled content for product and legal pages
- Vercel for production hosting

Laravel is not a good fit for this scope because there is no server-side
business logic or database to justify maintaining a PHP application.

## Public routes

- `/` — product story, 3D app preview, features, privacy promise, and App
  Store call to action
- `/about` — why Tamoe exists and who created it
- `/faq` — common product and privacy questions
- `/support` — support email and troubleshooting guidance
- `/privacy` — privacy policy
- `/terms` — terms of service, acceptance, intellectual property, limitations
  of liability, and copyright

The landing page includes a scroll-linked 3D Tamoe phone reveal, depth-based
cards, kinetic section reveals, cursor tilt, a scroll-progress indicator, and a
reduced-motion fallback.

## Product source of truth

Read [docs/TAMOE_PRODUCT_BRIEF.md](docs/TAMOE_PRODUCT_BRIEF.md) before writing
copy or implementing pages. It summarizes the relevant app documentation,
source behavior, and prior project discussions.

## Development

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
pnpm build
pnpm test
```

## Information still needed before publishing

- Official support email
- Team, studio, or legal entity name
- Governing jurisdiction for the terms
- Privacy-policy and terms effective dates
- Final App Store URL
- Whether the public site will be English-only or bilingual

Legal text should be reviewed by a qualified professional before release.
