"use client";

import { FormEvent, useState } from "react";

const supportEmail = "support@tamoe.app";

export default function FeedbackForm() {
  const [isReady, setIsReady] = useState(false);

  const submitFeedback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const replyEmail = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const body = [
      name ? `Name: ${name}` : "",
      replyEmail ? `Reply email: ${replyEmail}` : "",
      "",
      "Feedback:",
      message,
    ]
      .filter((line, index) => line || index === 2)
      .join("\n");

    setIsReady(true);
    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(
      "Tamoe website feedback",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="feedback-form" onSubmit={submitFeedback}>
      <div className="feedback-fields">
        <label>
          <span>Name <small>Optional</small></span>
          <input name="name" type="text" autoComplete="name" />
        </label>
        <label>
          <span>Email <small>Optional</small></span>
          <input name="email" type="email" autoComplete="email" />
        </label>
      </div>
      <label>
        <span>Your feedback</span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us what you would like Tamoe to improve..."
        />
      </label>
      <div className="feedback-submit">
        <button className="button button-primary" type="submit">
          Prepare email
        </button>
        <p aria-live="polite">
          {isReady
            ? "Your email app is opening with this message ready to send."
            : `This opens your email app and prepares a message to ${supportEmail}.`}
        </p>
      </div>
    </form>
  );
}
