import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "One guest, every event",
    copy: "Add someone once, then set their category, priority, and pax separately for each wedding moment.",
  },
  {
    number: "02",
    title: "Capacity you can trust",
    copy: "See actual pax against your target at a glance, before the venue count becomes a last-minute surprise.",
  },
  {
    number: "03",
    title: "Find anyone quickly",
    copy: "Search by typing or speaking, then narrow the list by event, category, or priority.",
  },
  {
    number: "04",
    title: "Export with confidence",
    copy: "Prepare event-by-event lists for PDF, Excel, and Numbers, ready to share with the people helping you.",
  },
];

const faqs = [
  {
    question: "Does Tamoe upload my guest list?",
    answer:
      "No. The current app keeps guest-list data on your device and does not require an account or cloud sync.",
  },
  {
    question: "Can one guest attend more than one event?",
    answer:
      "Yes. That is what Tamoe is designed for. A guest can have different pax, categories, and priorities for each event.",
  },
  {
    question: "Can I export my guest list?",
    answer:
      "Yes. Tamoe can prepare selected event lists as PDF or spreadsheet files, including formats compatible with Excel and Numbers.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Wedding guest planning, made gentle</p>
            <h1>
              One guest list
              <span>for every moment.</span>
            </h1>
            <p className="hero-lede">
              Tamoe helps you plan every wedding event without duplicating the
              people you love. Add each guest once, then shape the details for
              every celebration.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                <span className="apple-mark" aria-hidden="true">
                  ●
                </span>
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
            aria-label="A 3D preview of the Tamoe guest list that flips while scrolling"
          >
            <div className="soft-orbit orbit-one" />
            <div className="soft-orbit orbit-two" />
            <div className="phone-stage">
              <div className="phone-flip" data-phone-flip>
                <div className="phone phone-face phone-front">
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
                <div className="phone phone-face phone-back">
                  <div className="phone-island" />
                  <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <span>● ● ▰</span>
                </div>
                <div className="phone-heading">
                  <div>
                    <p>Good morning,</p>
                    <h2>Alya &amp; Bima</h2>
                  </div>
                  <div className="initials">AB</div>
                </div>
                <div className="event-selector">
                  <span className="event-selected">All Events</span>
                  <span>Akad</span>
                  <span>Reception</span>
                </div>
                <div className="capacity-card">
                  <div className="capacity-copy">
                    <span>Guest capacity</span>
                    <strong>284 <small>/ 320 pax</small></strong>
                  </div>
                  <div className="capacity-ring">
                    <span>89%</span>
                  </div>
                </div>
                <div className="guest-section-title">
                  <strong>Guests</strong>
                  <span>128 people</span>
                </div>
                <div className="guest-card">
                  <div className="guest-avatar">M</div>
                  <div className="guest-info">
                    <strong>Aunt Maya</strong>
                    <span>Bride Parents · Priority 1</span>
                  </div>
                  <strong className="guest-pax">5 pax</strong>
                </div>
                <div className="assignment-row">
                  <div>
                    <span className="assignment-dot akad-dot" />
                    <p><strong>Akad</strong><small>1 pax</small></p>
                  </div>
                  <div>
                    <span className="assignment-dot reception-dot" />
                    <p><strong>Reception</strong><small>4 pax</small></p>
                  </div>
                </div>
                <div className="guest-card muted-card">
                  <div className="guest-avatar muted-avatar">R</div>
                  <div className="guest-info">
                    <strong>Rafi Pratama</strong>
                    <span>Groom · Priority 2</span>
                  </div>
                  <strong className="guest-pax">2 pax</strong>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-note floating-note-top">
              <span className="note-icon">✓</span>
              <p><strong>On track</strong><small>36 pax remaining</small></p>
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
            <span>EVERY EVENT</span><i>✦</i>
            <span>YOUR MOMENTS</span><i>✦</i>
            <span>ONE GUEST</span><i>✦</i>
            <span>EVERY EVENT</span><i>✦</i>
            <span>YOUR MOMENTS</span><i>✦</i>
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
                A list begins simply. Then the Akad has one headcount, the
                reception has another, family categories change, and the same
                guest appears in three different notes.
              </p>
              <p>
                Tamoe brings those moving details into one calm place, built
                around the way real wedding events overlap.
              </p>
            </div>
          </div>
        </section>

        <section className="how-section section-shell" id="how-it-works">
          <div className="section-intro">
            <p className="eyebrow">The Tamoe difference</p>
            <h2 className="section-title">
              Add once.
              <span>Plan differently for every event.</span>
            </h2>
          </div>
          <div className="guest-journey">
            <article className="person-card">
              <div className="person-avatar">AM</div>
              <div>
                <p className="mini-label">Your guest</p>
                <h3>Aunt Maya</h3>
                <span>One person in your guest book</span>
              </div>
            </article>
            <div className="journey-lines" aria-hidden="true">
              <span />
              <i>→</i>
              <span />
            </div>
            <div className="event-cards">
              <article className="event-card" data-tilt>
                <p className="event-kicker"><span className="event-dot" /> Akad</p>
                <div><span>Pax</span><strong>1</strong></div>
                <div><span>Category</span><strong>Bride Parents</strong></div>
                <div><span>Priority</span><strong>1</strong></div>
              </article>
              <article className="event-card event-card-accent" data-tilt>
                <p className="event-kicker"><span className="event-dot" /> Reception</p>
                <div><span>Pax</span><strong>4</strong></div>
                <div><span>Category</span><strong>Family</strong></div>
                <div><span>Priority</span><strong>1</strong></div>
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
                A focused set of tools designed to make decisions clearer, not
                give you another complicated planning system to manage.
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
            <div className="privacy-mark" aria-hidden="true">
              <span>⌁</span>
            </div>
            <div>
              <p className="eyebrow">Private by design</p>
              <h2 className="section-title">
                Your guest list belongs
                <span>with you.</span>
              </h2>
              <p>
                Tamoe keeps your wedding guest information locally on your
                device. No account, no advertising profile, and no tracking.
                Voice search is there when you need it, without keeping your
                recordings or transcripts.
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
              <Image
                src="/tamoe-logo.png"
                alt=""
                width={68}
                height={68}
                unoptimized
              />
              <span>Tamoe</span>
            </div>
            <p className="eyebrow">Coming soon to the App Store</p>
            <h2>
              Focus on the people
              <span>and moments that matter.</span>
            </h2>
            <p>
              Let Tamoe take care of the guest list, so you can stay present
              for everything your wedding means.
            </p>
            <button className="button button-light" type="button" disabled>
              App Store link coming soon
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
