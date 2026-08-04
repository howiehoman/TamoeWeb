import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TAMOE handles information in the app and on this website.",
};

export default function PrivacyPage() {
  return (
    <main className="content-main">
      <section className="content-hero section-shell">
        <p className="eyebrow">Privacy policy</p>
        <h1>Your guest list is personal. We treat it that way.</h1>
        <p>Effective date: August 4, 2026</p>
      </section>

      <article className="content-body section-shell">
        <section className="prose-section">
          <h2>1. Who this policy covers</h2>
          <p>
            This Privacy Policy applies to the TAMOE iOS app and the TAMOE
            website. TAMOE is provided by the developer identified on its Apple
            App Store product page, together with the TAMOE team, referred to
            here as “TAMOE,” “we,” “us,” or “our.”
          </p>
          <p>
            TAMOE is a local-first wedding guest-list planner. You do not need
            an account to use the current version of the app.
          </p>
        </section>

        <section className="prose-section">
          <h2>2. Information in the TAMOE app</h2>
          <h3>Guest-list information</h3>
          <p>
            Names, phone numbers, addresses, notes, celebration assignments,
            categories, Priority Levels, Number of Pax values, and other
            planning details you enter are stored locally on your device using
            Apple platform storage. TAMOE does not operate a server that
            receives or stores these guest-list records.
          </p>

          <h3>Drafts and preferences</h3>
          <p>
            TAMOE stores unfinished form drafts, onboarding state, and app
            preferences locally so your work can be restored and the app can
            behave as expected.
          </p>

          <h3>Optional voice guest search</h3>
          <p>
            When you tap the microphone and grant permission, TAMOE captures
            your voice only to turn the spoken guest name into search text.
            The current implementation uses Apple&apos;s Speech framework. Speech
            audio may be sent to Apple&apos;s servers for recognition, depending on
            the language, device, and system capabilities. TAMOE does not keep
            the audio recording or retain the resulting transcript as a guest
            record. Apple processes speech data under its{" "}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
              own privacy terms
            </a>.
          </p>
          <p>
            Voice search is optional. You can search by typing instead, and you
            can revoke microphone or speech-recognition access at any time in
            iOS Settings under Privacy &amp; Security.
          </p>

          <h3>Exports</h3>
          <p>
            PDF and spreadsheet exports are created temporarily on your device
            so you can save or share them through the iOS share sheet. TAMOE
            does not receive the exported file. A copy may remain with any app,
            person, vendor, or storage location you choose, and their own terms
            and privacy practices will apply.
          </p>
        </section>

        <section className="prose-section">
          <h2>3. Information on this website</h2>
          <p>
            The website does not provide user accounts and does not include
            advertising trackers, marketing cookies, or a behavioral analytics
            package. It is hosted by Vercel, which may process ordinary
            infrastructure and request information such as IP address, device
            and browser details, timestamps, requested pages, approximate
            location derived from IP address, and diagnostic logs to deliver,
            secure, and maintain the site. See the{" "}
            <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">
              Vercel Privacy Notice
            </a>{" "}
            for more information.
          </p>
          <p>
            The feedback and support actions open your email app. If you email
            us, we receive the information you put in the message, your email
            address, and related message metadata. Please do not include private
            guest-list details in a support request.
          </p>
        </section>

        <section className="prose-section">
          <h2>4. How information is used</h2>
          <p>We use information only as needed to:</p>
          <ul>
            <li>provide the app features you choose to use;</li>
            <li>save your local guest-list work and preferences;</li>
            <li>create exports at your request;</li>
            <li>deliver, protect, and troubleshoot the website; and</li>
            <li>answer support, feedback, privacy, or legal requests.</li>
          </ul>
          <p>
            TAMOE does not sell guest-list information and does not use it for
            advertising or cross-app tracking.
          </p>
        </section>

        <section className="prose-section">
          <h2>5. Service providers and sharing</h2>
          <p>
            Apple may process speech audio when you use optional voice search,
            and Vercel processes limited website infrastructure data as our
            hosting provider. Your email providers process messages you send to
            us. We expect providers acting for these purposes to protect
            information consistently with their obligations and applicable law.
          </p>
          <p>
            We may disclose information when required by law, to protect rights
            or safety, or in connection with a legitimate reorganization of the
            app, subject to appropriate protections. We do not share local
            guest-list records because we do not receive them.
          </p>
        </section>

        <section className="prose-section">
          <h2>6. Retention and deletion</h2>
          <p>
            Local guest-list information remains on your device until you edit
            or delete it, reset relevant app data, or remove the app. Removing
            TAMOE may remove its local data. Export anything you want to retain
            before deleting the app.
          </p>
          <p>
            Support emails are kept only as long as reasonably necessary to
            answer the request, maintain support records, prevent abuse, or meet
            legal obligations. Website infrastructure logs are retained under
            our hosting configuration and Vercel&apos;s applicable retention rules.
          </p>
          <p>
            Because TAMOE does not receive your local guest-list records, we
            cannot view, recover, or remotely delete them for you.
          </p>
        </section>

        <section className="prose-section">
          <h2>7. Security</h2>
          <p>
            We use reasonable technical and organizational safeguards for the
            information we handle. No storage or transmission method is
            completely secure. Protect your iPhone with a passcode and share
            exported files only with people and services you trust.
          </p>
        </section>

        <section className="prose-section">
          <h2>8. Your choices and rights</h2>
          <p>
            You can review, edit, and delete guest records inside TAMOE, decline
            optional permissions, or revoke permissions in iOS Settings. You
            may also have privacy rights under the law where you live, including
            rights relating to access, correction, deletion, or objection for
            information we actually hold. Contact us to make a request.
          </p>
        </section>

        <section className="prose-section">
          <h2>9. Children&apos;s privacy</h2>
          <p>
            TAMOE is not directed to children under 13 and is not designed to
            collect personal information from children. If you believe a child
            has sent personal information to our support email, contact us so
            we can address it.
          </p>
        </section>

        <section className="prose-section">
          <h2>10. International processing</h2>
          <p>
            Apple, Vercel, and email providers may process information in
            countries other than your own. Their processing is governed by
            their terms, privacy notices, and applicable transfer safeguards.
          </p>
        </section>

        <section className="prose-section">
          <h2>11. Changes and contact</h2>
          <p>
            We may update this policy when TAMOE&apos;s features, providers, or
            legal obligations change. The revised policy will appear here with
            a new effective date.
          </p>
          <p>
            For privacy questions or requests, email{" "}
            <a href="mailto:tamoaeapp@gmail.com">tamoaeapp@gmail.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
