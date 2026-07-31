import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "One guest, many celebrations",
    copy: "Add each person once, then choose the celebrations they attend and keep their details together.",
  },
  {
    number: "02",
    title: "Number of Pax stays clear",
    copy: "Set the Number of Pax and see your invited total against the target for each celebration.",
  },
  {
    number: "03",
    title: "Categories for every circle",
    copy: "Organize guests as Bride, Groom, Bride Parents, Groom Parents, or any custom category your wedding needs.",
  },
  {
    number: "04",
    title: "Priority Level makes decisions clearer",
    copy: "Mark guests as Must Invite, Maybe, or Optional so you can decide who to invite when the list meets its limit.",
  },
  {
    number: "05",
    title: "Notes for one specific guest",
    copy: "Keep dietary needs, accessibility details, family context, or reminders attached to the exact guest they concern.",
  },
  {
    number: "06",
    title: "Find and share with ease",
    copy: "Search quickly, filter the list, and prepare PDF or spreadsheet exports when it is time to coordinate.",
  },
];

const faqs = [
  {
    question: "Does Tamoe upload my guest list?",
    answer:
      "No. The current app keeps your guest-list data on your iPhone and does not require an account or cloud sync.",
  },
  {
    question: "Can one guest attend more than one celebration?",
    answer:
      "Yes. Add a guest once, then include them in every celebration they will attend with the right category, Priority Level, and Number of Pax.",
  },
  {
    question: "Can I export my guest list?",
    answer:
      "Yes. Tamoe can prepare selected lists as PDF or spreadsheet files, including formats compatible with Excel and Numbers.",
  },
];

const teamMembers = [
  { name: "Howie Homan", initials: "HH" },
  { name: "Ivana Grasielda", initials: "IG" },
  { name: "Hansel Meinhard", initials: "HM" },
  { name: "Nicole Wahyudi", initials: "NW" },
  { name: "Ricky Tjahjono", initials: "RT" },
];

const appScreens = [
  {
    src: "/app-screens/01-all-events.png",
    label: "One shared list",
    title: "See every guest across every celebration",
    copy: "A single guest record shows every celebration they attend.",
  },
  {
    src: "/app-screens/02-holy-matrimony.png",
    label: "Real totals",
    title: "Keep the quota and Number of Pax visible",
    copy: "Tamoe calculates the live total from the guests in that celebration.",
  },
  {
    src: "/app-screens/03-guest-details.png",
    label: "Guest decisions",
    title: "Set Category, Priority Level, and Number of Pax",
    copy: "The details that shape each invitation stay together for every event.",
  },
  {
    src: "/app-screens/04-category-priority-pax.png",
    label: "Specific context",
    title: "Keep notes with the guest they belong to",
    copy: "Dietary needs, accessibility details, and reminders stay specific.",
  },
  {
    src: "/app-screens/05-guest-notes.png",
    label: "One person, full context",
    title: "Review decisions and notes in one place",
    copy: "Each guest has one clear record, even across several celebrations.",
  },
  {
    src: "/app-screens/06-custom-category.png",
    label: "Your wedding, your groups",
    title: "Create the Categories your guest list needs",
    copy: "Start with Bride, Groom, and parents, then add any group you want.",
  },
  {
    src: "/app-screens/07-export-options.png",
    label: "Ready for vendors",
    title: "Choose exactly what to export and share",
    copy: "Prepare PDF or spreadsheet files with the fields your vendors need.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Wedding guest planning, made gentle</p>
          <h1>
            Every guest,
            <span>thoughtfully planned.</span>
          </h1>
          <p className="hero-lede">
            Keep every name, celebration, Number of Pax, Category, Priority
            Level, and guest-specific note in one calm place. Tamoe keeps every
            decision clear from the first draft to the final headcount.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#download">
              <span className="apple-mark" aria-hidden="true">●</span>
              Coming soon on the App Store
            </a>
            <a className="text-link" href="#how-it-works">
              See how Tamoe works <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Tamoe product qualities">
            <span>Private by design</span>
            <span aria-hidden="true">•</span>
            <span>Made for iPhone</span>
            <span aria-hidden="true">•</span>
            <span>No account needed</span>
          </div>
        </div>

        <div
          className="hero-visual"
          data-hero-scene
          aria-label="An interactive preview of the Tamoe iPhone app"
        >
          <div className="soft-orbit orbit-one" />
          <div className="soft-orbit orbit-two" />
          <div className="phone-stage app-preview-stage">
            <div className="phone-flip" data-phone-flip>
              <div className="app-preview-face app-preview-brand">
                <div className="phone-front-shimmer" />
                <Image
                  src="/tamoe-logo.png"
                  alt=""
                  width={188}
                  height={188}
                  unoptimized
                />
                <strong>Tamoe</strong>
                <span>Every guest. Every moment.</span>
                <small>Scroll to enter the app</small>
              </div>
              <div className="app-preview-face app-preview-screen">
                <Image
                  src="/tamoe-app-preview.png"
                  alt="Tamoe showing the Holy Matrimony guest list with search, categories, Number of Pax, and Priority Levels"
                  width={456}
                  height={904}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="floating-note floating-note-top" data-depth="0.8">
            <span className="note-icon">✓</span>
            <p><strong>On Track</strong><small>30 / 200 pax</small></p>
          </div>
          <div className="floating-note floating-note-bottom" data-depth="-0.55">
            <p><strong>Number of Pax</strong><small>One invitation, two people</small></p>
            <span className="pax-stepper" aria-hidden="true"><i>−</i><b>2</b><i>+</i></span>
          </div>
          <div className="priority-float" data-depth="1.1" aria-hidden="true">
            <span />
            Must Invite
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          <span>ONE GUEST</span><i>✦</i>
          <span>EVERY CELEBRATION</span><i>✦</i>
          <span>ONE CALM LIST</span><i>✦</i>
          <span>ONE GUEST</span><i>✦</i>
          <span>EVERY CELEBRATION</span><i>✦</i>
          <span>ONE CALM LIST</span><i>✦</i>
        </div>
      </div>

      <section className="story-section" id="story">
        <div className="section-shell story-grid">
          <div>
            <p className="eyebrow">Why Tamoe exists</p>
            <h2 className="section-title">
              Wedding lists get complicated.
              <span>The people never should.</span>
            </h2>
          </div>
          <div className="story-copy">
            <p>
              A wedding can include a ceremony, a reception, and the
              celebrations around them. Each moment may need a different mix
              of guests, while the same names keep returning.
            </p>
            <p>
              Tamoe replaces scattered notes and duplicate rows with one
              thoughtful guest list. Categories, Number of Pax, Priority
              Levels, and guest-specific notes stay easy to understand.
            </p>
          </div>
        </div>
      </section>

      <section className="team-story-section section-shell" id="team">
        <div className="purpose-grid">
          <div className="purpose-copy">
            <p className="eyebrow">Why we built Tamoe</p>
            <h2 className="section-title">
              A guest list is never
              <span>just a list.</span>
            </h2>
            <p className="purpose-lede">
              Guest listing is one of the most emotionally difficult parts of
              planning a wedding, yet it is rarely talked about. Couples can
              find themselves caught between their own wishes, their parents,
              and their future in-laws. Each group has people they want to
              include.
            </p>
            <p>
              Tamoe brings the conversation back to real data. Actual pax are
              shown beside the agreed quota, so everyone can see what is
              possible, understand the trade-offs, and take ownership of the
              decisions instead of arguing from separate lists.
            </p>
            <p>
              The same organized data also bridges the couple and their wedding
              vendors. Export the guest list to Excel, PDF, or Numbers, then
              share a clear working document with the people handling the venue,
              catering, invitations, and the wedding day.
            </p>
          </div>

          <article className="shared-truth-card" data-tilt>
            <div className="truth-card-heading">
              <div>
                <span className="mini-label">One shared source of truth</span>
                <h3>Holy Matrimony</h3>
              </div>
              <span className="truth-status"><i /> On Track</span>
            </div>
            <div className="truth-quota">
              <div>
                <span>Real guest total</span>
                <strong>146 <small>/ 200 pax</small></strong>
              </div>
              <span>54 pax available</span>
            </div>
            <div className="truth-progress" aria-label="146 of 200 pax">
              <span />
            </div>
            <div className="ownership-row">
              <span>Couple</span>
              <i>+</i>
              <span>Parents</span>
              <i>+</i>
              <span>In-laws</span>
            </div>
            <div className="vendor-bridge">
              <div>
                <span className="mini-label">Ready for vendors</span>
                <strong>Export one clear guest list</strong>
              </div>
              <div className="export-formats" aria-label="Export formats">
                <span>Excel</span>
                <span>PDF</span>
                <span>Numbers</span>
              </div>
            </div>
          </article>
        </div>

        <div className="team-heading">
          <p className="eyebrow">The team behind Tamoe</p>
          <h2>Five perspectives. One thoughtful product.</h2>
          <p>
            Built at Apple Developer Academy by a team who wanted to make a
            sensitive wedding conversation clearer, fairer, and easier to act
            on.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article className="team-member" data-tilt key={member.name}>
              <span className={`team-avatar team-avatar-${index + 1}`}>
                {member.initials}
              </span>
              <h3>{member.name}</h3>
              <p>Tamoe Team</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section section-shell" id="how-it-works">
        <div className="section-intro">
          <p className="eyebrow">The Tamoe difference</p>
          <h2 className="section-title">
            Add each person once.
            <span>Plan every moment with care.</span>
          </h2>
        </div>
        <div className="guest-journey">
          <article className="person-card" data-tilt>
            <div className="person-avatar">AJ</div>
            <div>
              <p className="mini-label">Your guest</p>
              <h3>Aunt Jane</h3>
              <span>One guest record, kept beautifully organized</span>
            </div>
          </article>
          <div className="journey-lines" aria-hidden="true">
            <span /><i>→</i><span />
          </div>
          <div className="event-cards">
            <article className="event-card" data-tilt>
              <p className="event-kicker"><span className="event-dot" /> Holy Matrimony</p>
              <div><span>Number of Pax</span><strong>2 pax</strong></div>
              <div><span>Category</span><strong>Bride Parents</strong></div>
              <div><span>Priority Level</span><strong>Maybe</strong></div>
              <div><span>Notes</span><strong>Vegetarian meal</strong></div>
            </article>
            <article className="event-card event-card-accent" data-tilt>
              <p className="event-kicker"><span className="event-dot" /> Reception</p>
              <div><span>Guest</span><strong>Included</strong></div>
              <div><span>Category</span><strong>Family Friends</strong></div>
              <div><span>Priority Level</span><strong>Must Invite</strong></div>
              <div><span>Notes</span><strong>Specific to Aunt Jane</strong></div>
            </article>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-shell">
          <div className="section-intro feature-heading">
            <div>
              <p className="eyebrow">Thoughtful by default</p>
              <h2 className="section-title">
                Everything your guest list needs.
                <span>Nothing it doesn&apos;t.</span>
              </h2>
            </div>
            <p>
              A focused set of tools for choosing who attends, keeping the
              headcount visible, recording the details that matter for each
              person, and finding any guest without adding complexity.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" data-tilt key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="app-tour-section" id="app-preview">
        <div className="section-shell app-tour-heading">
          <div>
            <p className="eyebrow">The real Tamoe app</p>
            <h2 className="section-title">
              Follow the guest list
              <span>from decision to delivery.</span>
            </h2>
          </div>
          <p>
            Every screen below was captured directly from Tamoe running in iOS
            Simulator with seeded demonstration guests. No generated app
            imagery is used.
          </p>
        </div>
        <div className="app-screen-track" aria-label="Tamoe app screenshots">
          {appScreens.map((screen, index) => (
            <figure className="app-screen-card" data-tilt key={screen.src}>
              <div className="app-screen-frame">
                <Image
                  src={screen.src}
                  alt={`${screen.title}. Actual Tamoe app screen.`}
                  width={1206}
                  height={2622}
                  sizes="(max-width: 640px) 76vw, 330px"
                  unoptimized
                />
                <span className="screen-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <figcaption>
                <span className="mini-label">{screen.label}</span>
                <h3>{screen.title}</h3>
                <p>{screen.copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="privacy-section section-shell" id="privacy">
        <div className="privacy-card" data-tilt>
          <div className="privacy-mark" aria-hidden="true"><span>⌁</span></div>
          <div>
            <p className="eyebrow">Private by design</p>
            <h2 className="section-title">
              Your guest list belongs
              <span>with you.</span>
            </h2>
            <p>
              Tamoe keeps names, phone numbers, addresses, notes, and planning
              details locally on your device. No account, no advertising
              profile, and no tracking.
            </p>
            <Link className="text-link" href="/privacy">
              Read our privacy approach <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="privacy-list">
            <li><span>✓</span> Local device storage</li>
            <li><span>✓</span> No account required</li>
            <li><span>✓</span> No advertising or tracking</li>
            <li><span>✓</span> Temporary export files</li>
          </ul>
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="faq-heading">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">Questions, answered.</h2>
          </div>
          <Link className="text-link" href="/faq">
            View all questions <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="download-section section-shell" id="download">
        <div className="download-card">
          <div className="download-wordmark">
            <Image src="/tamoe-logo.png" alt="" width={68} height={68} unoptimized />
            <span>Tamoe</span>
          </div>
          <p className="eyebrow">Coming soon to the App Store</p>
          <h2>
            Make room for every person
            <span>who matters.</span>
          </h2>
          <p>
            Let Tamoe care for the guest list, so you can stay present for the
            people and moments that make your wedding meaningful.
          </p>
          <button className="button button-light" type="button" disabled>
            App Store link coming soon
          </button>
        </div>
      </section>
    </main>
  );
}
