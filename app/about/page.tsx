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
        <h1>A clearer way to plan every name that matters.</h1>
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
              Guest-list decisions can create tension between couples, parents,
              and future in-laws because every person brings meaningful
              relationships and expectations to the table. Tamoe makes the
              guest total and quota visible, giving everyone a clearer basis
              for conversation and shared ownership.
            </p>
          </article>
          <article className="about-card">
            <h2>Focused, not crowded</h2>
            <p>
              Add a person once, then keep their Number of Pax, category,
              Priority Level, celebrations, and notes connected. Export the
              organized result to Excel, PDF, or Numbers for wedding vendors.
            </p>
          </article>
          <article className="about-card">
            <h2>Clear by design</h2>
            <p>
              Warm surfaces, clear hierarchy, and familiar iPhone interactions
              make searching, filtering, and editing the list feel
              approachable, even when the planning becomes complex.
            </p>
          </article>
          <article className="about-card full-span">
            <h2>The team behind Tamoe</h2>
            <p>
              Created at Apple Developer Academy by Howie Homan, Ivana
              Grasielda, Hansel Meinhard, Nicole Wahyudi, and Ricky Tjahjono.
              Together, we are building Tamoe with care for native interaction,
              accessibility, privacy, and the relationships behind every
              guest-list decision.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
