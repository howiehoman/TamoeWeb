import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about Tamoe guest lists, events, privacy, voice search, and exports.",
};

const questions = [
  ["What is Tamoe?", "Tamoe is an iPhone guest-list planner made for weddings with multiple events. It helps you keep each guest once while managing different attendance details for every event."],
  ["Can one guest attend several events?", "Yes. A guest may be included in any combination of your events, with separate category, priority, and number of pax for each one."],
  ["How many events can I create?", "Tamoe is designed to support multiple wedding events. Practical limits may depend on your device, but the app does not impose a small fixed event allowance."],
  ["Where is my guest information stored?", "The current version stores guest-list data locally on your device. There is no Tamoe account or cloud synchronization."],
  ["Does Tamoe track me?", "The reviewed app does not include advertising, analytics, or tracking. The website is also designed without marketing cookies or behavioral analytics."],
  ["Why does Tamoe request microphone access?", "Microphone and speech-recognition access are used for optional voice guest search. The reviewed app does not persist recordings or transcripts."],
  ["Can I export my list?", "Yes. You can prepare selected events and categories as PDF, Excel, or Numbers-compatible spreadsheet files. Each selected event receives its own section or worksheet."],
  ["Why does a guest appear more than once in an export?", "If a guest attends several selected events, they intentionally appear in each event section because their pax or other details may differ."],
  ["Can I move my data to a new iPhone?", "The current app does not provide account-based cloud sync. Device migration depends on the backup and transfer tools available on your iPhone."],
  ["Does Tamoe collect RSVPs?", "No. Tamoe currently helps you plan and organize a guest list; it does not send invitations or collect RSVP responses."],
];

export default function FaqPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">Frequently asked questions</p>
        <h1>A little clarity before the celebration.</h1>
        <p>
          Everything you need to know about how Tamoe organizes events,
          protects your guest list, and prepares exports.
        </p>
      </section>
      <section className="content-body section-shell">
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
