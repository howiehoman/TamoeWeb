import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about Tamoe guest lists, celebrations, privacy, search, and exports.",
};

const questions = [
  ["What is Tamoe?", "Tamoe is a focused iPhone app for planning a wedding guest list across multiple celebrations. It brings names, contact details, Number of Pax, categories, Priority Levels, and notes into one calm place."],
  ["Can one guest attend several celebrations?", "Yes. Add a guest once, then include them in any combination of your celebrations with the details that apply to each one."],
  ["How do Priority Levels work?", "Use Must Invite, Maybe, and Optional to decide who to invite when your guest list meets its limit. These planning labels make each decision visible; Tamoe does not send invitations or collect responses."],
  ["Can Tamoe help me stay within capacity?", "Yes. Each celebration can have a target, and Tamoe shows the planned guest total and whether the list is on track."],
  ["How can I organize guests?", "Use categories such as Bride, Groom, Bride Parents, Groom Parents, or create any custom category your wedding needs. Search and filter the list to find the people you need."],
  ["Can I keep notes for an individual guest?", "Yes. Notes stay attached to that specific guest, so dietary needs, accessibility details, family context, and personal reminders are ready when you need them."],
  ["Where is my guest information stored?", "The current version stores guest-list data locally on your device. There is no Tamoe account or cloud synchronization."],
  ["Does Tamoe track me?", "The reviewed app does not include advertising, analytics, or tracking. The website is also designed without marketing cookies or behavioral analytics."],
  ["Why does Tamoe request microphone access?", "Microphone and speech-recognition access are used for optional voice guest search. The reviewed app does not persist recordings or transcripts."],
  ["Can I export my list?", "Yes. You can prepare selected celebrations and categories as PDF, Excel, or Numbers-compatible spreadsheet files. Each selected celebration receives its own section or worksheet."],
  ["Why does a guest appear more than once in an export?", "If a guest attends several selected celebrations, they intentionally appear in each section so every list remains complete."],
  ["Can I move my data to a new iPhone?", "The current app does not provide account-based cloud sync. Device migration depends on the backup and transfer tools available on your iPhone."],
  ["Does Tamoe collect invitation responses?", "No. Tamoe helps you plan and organize the guest list; it does not send invitations or collect responses."],
];

export default function FaqPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">Frequently asked questions</p>
        <h1>A little clarity before the celebration.</h1>
        <p>
          Everything you need to know about how Tamoe organizes celebrations,
          protects your guest list, and prepares it for sharing.
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
