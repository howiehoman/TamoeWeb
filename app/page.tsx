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
    title: "A headcount that stays clear",
    copy: "Set household size and see your invited total against the target for each celebration.",
  },
  {
    number: "03",
    title: "Decisions you can see",
    copy: "Group guests by category and mark them Must Invite, Maybe, or Optional as your list takes shape.",
  },
  {
    number: "04",
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
      "Yes. Add a guest once, then include them in every celebration they will attend with the right category, invitation status, and household size.",
  },
  {
    question: "Can I export my guest list?",
    answer:
      "Yes. Tamoe can prepare selected lists as PDF or spreadsheet files, including formats compatible with Excel and Numbers.",
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
            Keep every name, celebration, household size, and invitation
            decision in one calm place. Tamoe helps your guest list stay clear
            from the first draft to the final headcount.
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
              <div className="app-preview-face app-preview-front">
                <Image
                  src="/tamoe-app-preview.png"
                  alt="Tamoe showing the Holy Matrimony guest list with search, categories, household sizes, and invitation statuses"
                  width={456}
                  height={904}
                  priority
                  unoptimized
                />
              </div>
              <div className="app-preview-face app-preview-back">
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
              </div>
            </div>
          </div>
          <div className="floating-note floating-note-top">
            <span className="note-icon">✓</span>
            <p><strong>On track</strong><small>30 of 200 guests planned</small></p>
          </div>
          <div className="floating-note floating-note-bottom">
            <span className="note-icon privacy-icon">⌁</span>
            <p><strong>Stored locally</strong><small>Your list stays on device</small></p>
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
              thoughtful guest list—so categories, household sizes, and
              invitation decisions stay easy to understand.
            </p>
          </div>
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
          <article className="person-card">
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
              <div><span>Household size</span><strong>2</strong></div>
              <div><span>Category</span><strong>Bride&apos;s</strong></div>
              <div><span>Status</span><strong>Maybe</strong></div>
            </article>
            <article className="event-card event-card-accent" data-tilt>
              <p className="event-kicker"><span className="event-dot" /> Reception</p>
              <div><span>Guest</span><strong>Included</strong></div>
              <div><span>Details</span><strong>Kept together</strong></div>
              <div><span>Notes</span><strong>Ready when needed</strong></div>
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
              headcount visible, and finding any guest without turning wedding
              planning into another complicated system.
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

      <section className="privacy-section section-shell" id="privacy">
        <div className="privacy-card">
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
