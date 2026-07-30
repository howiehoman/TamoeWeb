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
        <h1>A guest list shaped around real wedding days.</h1>
        <p>
          Tamoe began with a familiar problem: one wedding, several events, and
          a guest list scattered across notes, chats, and spreadsheets.
        </p>
      </section>
      <section className="content-body wide section-shell">
        <div className="about-grid">
          <article className="about-card full-span">
            <h2>The idea</h2>
            <p>
              Couples should not have to duplicate the people they love just
              because attendance looks different at the Akad, Holy Matrimony,
              reception, or another celebration. Tamoe keeps each person in one
              place while respecting every event&apos;s details.
            </p>
          </article>
          <article className="about-card">
            <h2>Focused, not crowded</h2>
            <p>
              Tamoe concentrates on guest organization, capacity, and useful
              exports. It is intentionally not another sprawling wedding
              management system.
            </p>
          </article>
          <article className="about-card">
            <h2>Calm by design</h2>
            <p>
              Warm surfaces, clear hierarchy, and familiar iPhone interactions
              make the list feel approachable—even when the planning becomes
              complex.
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
