import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with TAMOE and learn what to include in a support request.",
};

export default function SupportPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">TAMOE support</p>
        <h1>We&apos;re here to help you keep planning.</h1>
        <p>
          Find quick guidance below or email the TAMOE team. Please avoid
          including private guest information in your support message.
        </p>
      </section>
      <section className="content-body wide section-shell">
        <div className="support-grid">
          <article className="support-card">
            <h2>Email support</h2>
            <p>
              Tell us what happened, which iPhone and iOS version you use, and
              the TAMOE version shown in Settings.
            </p>
            <a className="button button-primary" href="mailto:tamoaeapp@gmail.com">
              tamoaeapp@gmail.com
            </a>
          </article>
          <article className="support-card">
            <h2>Common questions</h2>
            <p>
              Learn about local storage, celebration assignments, voice
              search, and spreadsheet or PDF exports.
            </p>
            <Link className="text-link" href="/faq">
              Browse the FAQ <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article className="support-card full-span">
            <h2>Before you contact us</h2>
            <ol className="steps-list">
              <li>Confirm that TAMOE and iOS are updated to the latest available versions.</li>
              <li>Close and reopen TAMOE, then try the action again.</li>
              <li>For export issues, check that the selected celebrations contain guests and that your device has available storage.</li>
              <li>Do not delete the app while troubleshooting; locally stored app data may be removed with it.</li>
            </ol>
          </article>
        </div>
      </section>
    </main>
  );
}
