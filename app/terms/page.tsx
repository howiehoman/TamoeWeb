import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Tamoe app and website.",
};

export default function TermsPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">Terms of service</p>
        <h1>Clear terms for using Tamoe.</h1>
        <p>Effective date: July 30, 2026</p>
      </section>
      <article className="content-body section-shell">
        <div className="draft-notice">
          Pre-release legal draft: the Tamoe legal entity and governing
          jurisdiction must be inserted and this document professionally
          reviewed before public App Store release.
        </div>
        <section className="prose-section">
          <h2>1. Acceptance</h2>
          <p>
            By downloading, accessing, or using Tamoe or this website, you agree
            to these Terms. If you do not agree, do not use Tamoe.
          </p>
        </section>
        <section className="prose-section">
          <h2>2. What Tamoe provides</h2>
          <p>
            Tamoe provides tools for organizing wedding guests, events,
            capacity targets, and exports. Tamoe does not provide wedding,
            venue, financial, legal, or event-management advice.
          </p>
        </section>
        <section className="prose-section">
          <h2>3. Your responsibilities</h2>
          <p>
            You are responsible for information you enter, the accuracy of your
            plans, the security of your device, and obtaining any permission
            needed to store or share another person&apos;s details. Do not use
            Tamoe unlawfully or to infringe another person&apos;s rights.
          </p>
        </section>
        <section className="prose-section">
          <h2>4. License and acceptable use</h2>
          <p>
            Subject to these Terms, Tamoe grants you a personal, limited,
            non-exclusive, non-transferable, revocable license to use the app
            for its intended purpose. You may not copy, resell, reverse
            engineer, interfere with, or misuse Tamoe except where applicable
            law expressly permits it.
          </p>
        </section>
        <section className="prose-section">
          <h2>5. Intellectual property and copyright</h2>
          <p>
            Tamoe, its visual identity, software, design, text, graphics, and
            other original materials are owned by the Tamoe team or its
            licensors and are protected by intellectual-property and copyright
            laws. These Terms do not transfer ownership to you. “Tamoe” and
            associated branding may not be used without prior written
            permission.
          </p>
          <p>
            You retain rights in the guest information and other content you
            enter. You are responsible for having the right to use that
            information.
          </p>
        </section>
        <section className="prose-section">
          <h2>6. Apple App Store terms</h2>
          <p>
            If you obtain Tamoe through Apple&apos;s App Store, Apple is not a
            party to these Terms and is not responsible for Tamoe, maintenance,
            support, warranties, or claims except as required by the App Store
            terms that apply to your download.
          </p>
        </section>
        <section className="prose-section">
          <h2>7. Availability, changes, and termination</h2>
          <p>
            We may improve, change, suspend, or discontinue features. We may
            terminate or restrict access where necessary to protect Tamoe,
            comply with law, or address misuse. You may stop using the service
            at any time.
          </p>
        </section>
        <section className="prose-section">
          <h2>8. Disclaimers</h2>
          <p>
            To the maximum extent permitted by law, Tamoe is provided “as is”
            and “as available.” We do not guarantee that the app will always be
            uninterrupted, error-free, or suitable for every planning need.
            You should verify important headcounts and maintain appropriate
            copies of information you need.
          </p>
        </section>
        <section className="prose-section">
          <h2>9. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, the Tamoe team and its
            contributors will not be liable for indirect, incidental, special,
            consequential, or punitive damages, or for lost data, opportunities,
            profits, or event-related costs arising from use of or inability to
            use Tamoe. Any total liability will be limited to the amount you
            paid for Tamoe during the twelve months before the claim, or the
            minimum amount required by applicable law if greater.
          </p>
        </section>
        <section className="prose-section">
          <h2>10. Governing law</h2>
          <p>
            The governing law and courts will be identified here after the
            Tamoe legal entity and release jurisdiction are confirmed. Nothing
            in these Terms limits mandatory consumer protections that apply to
            you.
          </p>
        </section>
        <section className="prose-section">
          <h2>11. Changes and contact</h2>
          <p>
            We may update these Terms and will post the revised version with a
            new effective date. Questions can be sent to{" "}
            <a href="mailto:support@tamoe.app">support@tamoe.app</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
