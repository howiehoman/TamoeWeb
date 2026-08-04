import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the TAMOE app and website.",
};

export default function TermsPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">Terms of service</p>
        <h1>Clear terms for using TAMOE.</h1>
        <p>Effective date: August 4, 2026</p>
      </section>

      <article className="content-body section-shell">
        <section className="prose-section">
          <h2>1. Provider and acceptance</h2>
          <p>
            TAMOE is provided by the developer identified on its Apple App
            Store product page, together with the TAMOE team, referred to in
            these Terms as “TAMOE,” “we,” “us,” or “our.”
          </p>
          <p>
            By downloading, accessing, or using the TAMOE app or website, you
            agree to these Terms and our Privacy Policy. If you do not agree,
            do not use TAMOE. You must be legally capable of agreeing to these
            Terms in the place where you live.
          </p>
        </section>

        <section className="prose-section">
          <h2>2. Apple App Store terms</h2>
          <p>
            Apps from the App Store are licensed, not sold. Apple&apos;s{" "}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noreferrer"
            >
              Standard Licensed Application End User License Agreement
            </a>{" "}
            applies to your App Store download unless a custom license is shown
            in App Store Connect. These Terms supplement that license and govern
            the TAMOE website and app-specific services. If a mandatory App
            Store term conflicts with these Terms, the mandatory App Store term
            controls.
          </p>
          <p>
            These Terms are between you and the TAMOE provider, not Apple.
            TAMOE, not Apple, is responsible for the app and its content,
            maintenance, support, and product claims, except to the extent
            Apple has obligations under its own terms or applicable law.
          </p>
        </section>

        <section className="prose-section">
          <h2>3. What TAMOE provides</h2>
          <p>
            TAMOE provides local-first tools for organizing wedding guests,
            celebrations, Number of Pax values, Priority Levels, categories,
            notes, capacity targets, and guest-list exports. The current app
            does not require an account and does not send invitations or
            collect guest responses.
          </p>
          <p>
            TAMOE is a planning tool. It does not provide wedding-vendor,
            venue, financial, legal, safety, or other professional advice.
            Verify important names, headcounts, contact details, and exports
            before relying on them.
          </p>
        </section>

        <section className="prose-section">
          <h2>4. License and permitted use</h2>
          <p>
            Subject to these Terms and the applicable App Store usage rules,
            TAMOE grants you a personal, limited, non-exclusive,
            non-transferable, revocable license to use the app on Apple-branded
            products you own or control for its intended purpose, including use
            through Family Sharing where Apple permits it.
          </p>
        </section>

        <section className="prose-section">
          <h2>5. Your information and responsibilities</h2>
          <p>
            You retain your rights in the guest information and other content
            you enter. You are responsible for the accuracy and lawfulness of
            that content, the security of your device, and obtaining any
            permission required to store or share another person&apos;s details.
          </p>
          <p>
            Do not enter information you are not entitled to use. Protect
            sensitive guest details, keep appropriate backups or exports, and
            share files only with people and vendors you trust.
          </p>
        </section>

        <section className="prose-section">
          <h2>6. Acceptable use</h2>
          <p>You may not:</p>
          <ul>
            <li>use TAMOE unlawfully or infringe another person&apos;s rights;</li>
            <li>harass, harm, impersonate, or mislead another person;</li>
            <li>
              copy, resell, sublicense, reverse engineer, or create derivative
              works from TAMOE except where applicable law expressly permits;
            </li>
            <li>
              bypass security, disrupt the app or website, introduce malicious
              code, or access systems or data without authorization; or
            </li>
            <li>use TAMOE in a way that places an unreasonable load on it.</li>
          </ul>
        </section>

        <section className="prose-section">
          <h2>7. Exports and third-party services</h2>
          <p>
            When you export or share a guest list, you direct iOS and the
            destination service or person to receive that file. TAMOE does not
            control what happens to a file after you share it. Third-party apps,
            vendors, websites, email providers, Apple services, and hosting
            providers operate under their own terms and privacy practices.
          </p>
        </section>

        <section className="prose-section">
          <h2>8. Intellectual property and copyright</h2>
          <p>
            TAMOE, its software, visual identity, design, text, graphics,
            documentation, and other original materials are owned by the TAMOE
            provider and team or their licensors and are protected by
            intellectual-property and copyright laws. These Terms do not
            transfer ownership to you. “TAMOE” and associated branding may not
            be used without prior written permission.
          </p>
          <p>
            If you send ideas or feedback, you allow us to use them without
            restriction or compensation to improve TAMOE, while you retain
            ownership of any rights you may have in the feedback.
          </p>
        </section>

        <section className="prose-section">
          <h2>9. Availability and updates</h2>
          <p>
            We may add, change, suspend, or discontinue features and may issue
            updates required for security, compatibility, or reliable
            operation. The app may not work with every device, OS version,
            language, or third-party service. We do not promise that TAMOE will
            always be available, uninterrupted, or error-free.
          </p>
        </section>

        <section className="prose-section">
          <h2>10. Disclaimers</h2>
          <p>
            To the maximum extent permitted by law, TAMOE is provided “as is”
            and “as available,” with all faults and without warranties of any
            kind, whether express, implied, or statutory. This includes implied
            warranties of merchantability, fitness for a particular purpose,
            accuracy, quiet enjoyment, and non-infringement. Some jurisdictions
            do not allow certain exclusions, so they may not apply to you.
          </p>
        </section>

        <section className="prose-section">
          <h2>11. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, TAMOE and its contributors
            will not be liable for indirect, incidental, special,
            consequential, exemplary, or punitive damages, or for lost data,
            opportunities, profits, goodwill, or wedding-related costs arising
            from use of or inability to use TAMOE.
          </p>
          <p>
            To the maximum extent permitted by law, TAMOE&apos;s total liability for
            claims relating to the app or website will not exceed the greater
            of the amount you paid for TAMOE during the twelve months before the
            claim or fifty US dollars. Nothing in these Terms excludes liability
            that cannot lawfully be excluded or limits mandatory consumer
            rights.
          </p>
        </section>

        <section className="prose-section">
          <h2>12. Termination</h2>
          <p>
            You may stop using TAMOE at any time. Your license ends
            automatically if you materially breach these Terms. We may restrict
            or end access where reasonably necessary to protect TAMOE, comply
            with law, or address misuse. Sections that by their nature should
            survive termination will remain in effect.
          </p>
        </section>

        <section className="prose-section">
          <h2>13. Governing law and consumer rights</h2>
          <p>
            These Terms are governed by the laws applicable to the TAMOE
            provider in its primary place of establishment, without regard to
            conflict-of-law rules. Courts with jurisdiction there will hear
            disputes unless mandatory law gives you the right to use another
            forum. Nothing in these Terms limits consumer protections that
            cannot be waived under the law where you live.
          </p>
        </section>

        <section className="prose-section">
          <h2>14. Changes, severability, and entire agreement</h2>
          <p>
            We may update these Terms and will post the revised version with a
            new effective date. If a provision is unenforceable, the remaining
            provisions continue in effect. Our failure to enforce a provision
            is not a waiver. These Terms, the Privacy Policy, and the applicable
            App Store license form the agreement governing your use of TAMOE.
          </p>
        </section>

        <section className="prose-section">
          <h2>15. Contact</h2>
          <p>
            Questions about these Terms, support, intellectual property, or
            copyright can be sent to{" "}
            <a href="mailto:tamoaeapp@gmail.com">tamoaeapp@gmail.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
