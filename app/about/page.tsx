import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Why Tamoe was created and the wedding-planning problem it solves.",
};

export default function AboutPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">About Tamoe</p>
        <h1>A calmer way to plan every name that matters.</h1>
        <p>
          Tamoe began with a familiar problem: a wedding with several
          celebrations and one guest list scattered across notes, chats, and
          spreadsheets.
        </p>
      </section>
      <section className="content-body wide section-shell">
        <div className="about-grid">
          <article className="about-card full-span">
            <h2>The idea</h2>
            <p>
              Add a person once, then choose the celebrations they attend.
              Their contact details, Number of Pax, category, Priority Level,
              and notes stay connected instead of being copied between
              separate lists.
            </p>
          </article>
          <article className="about-card">
            <h2>Focused, not crowded</h2>
            <p>
              Tamoe keeps the target and current guest count visible while
              categories and Must Invite, Maybe, or Optional statuses help
              couples make thoughtful decisions.
            </p>
          </article>
          <article className="about-card">
            <h2>Calm by design</h2>
            <p>
              Warm surfaces, clear hierarchy, and familiar iPhone interactions
              make searching, filtering, and editing the list feel
              approachable—even when the planning becomes complex.
            </p>
          </article>
          <article className="about-card full-span">
            <h2>Created at Apple Developer Academy</h2>
            <p>
              Tamoe is being developed as an iOS product with care for native
              interaction, accessibility, and privacy. Team details will be
              added here before the public App Store release.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
