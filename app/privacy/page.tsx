import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TAMOE handles app and website information.",
};

export default function PrivacyPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">Privacy policy</p>
        <h1>Your guest list is personal. We treat it that way.</h1>
        <p>Effective date: July 30, 2026</p>
      </section>
      <article className="content-body section-shell">
        <div className="draft-notice">
          Pre-release draft: this policy reflects the app and website currently
          under development. The final release must be reviewed against the
          submitted App Store build and confirmed by the TAMOE team.
        </div>
        <section className="prose-section">
          <h2>Overview</h2>
          <p>
            TAMOE is designed as a local-first wedding guest-list application.
            The current app does not require an account and does not operate a
            server that receives your guest-list records.
          </p>
        </section>
        <section className="prose-section">
          <h2>Information in the TAMOE app</h2>
          <h3>Guest-list information</h3>
          <p>
            Names, phone numbers, addresses, notes, celebration assignments,
            categories, Priority Levels, and Number of Pax values that you enter
            are stored locally on your device using Apple platform storage
            technologies.
          </p>
          <h3>Drafts and preferences</h3>
          <p>
            TAMOE may store unfinished form drafts and preferences locally so
            that your work can be restored and the app can behave as expected.
          </p>
          <h3>Voice guest search</h3>
          <p>
            If you choose voice search, TAMOE requests microphone and speech
            recognition access to convert speech into a search query. The
            reviewed app does not persist audio recordings or transcripts.
            Apple&apos;s speech services may process speech according to
            Apple&apos;s own privacy terms.
          </p>
          <h3>Exports</h3>
          <p>
            Exported PDF and spreadsheet files are created temporarily so you
            can share or save them using the iOS share sheet. A copy may remain
            wherever you choose to save or send it.
          </p>
        </section>
        <section className="prose-section">
          <h2>Information on this website</h2>
          <p>
            This public website is designed without user accounts, behavioral
            analytics, advertising trackers, or marketing cookies. If you
            contact us by email, your email provider and ours process the
            message, and we use it only to answer or manage your request.
          </p>
        </section>
        <section className="prose-section">
          <h2>Sharing and selling information</h2>
          <p>
            TAMOE does not sell guest-list information. Because the reviewed
            app stores guest data locally, TAMOE does not receive that data to
            share with advertisers or data brokers.
          </p>
        </section>
        <section className="prose-section">
          <h2>Data control and deletion</h2>
          <p>
            You can edit or delete guest records inside the app. Removing the
            app may remove its local data. Before deleting TAMOE, export any
            information you want to retain.
          </p>
        </section>
        <section className="prose-section">
          <h2>Children&apos;s privacy</h2>
          <p>
            TAMOE is not directed to children and is intended for people
            organizing wedding celebrations.
          </p>
        </section>
        <section className="prose-section">
          <h2>Policy changes and contact</h2>
          <p>
            We may update this policy when TAMOE&apos;s features or practices
            change. Material changes will appear on this page with a new
            effective date. Questions can be sent to{" "}
            <a href="mailto:tamoaeapp@gmail.com">tamoaeapp@gmail.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
