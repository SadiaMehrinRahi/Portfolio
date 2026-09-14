"use client";

import { useState } from "react";

const FORMSPREE_ID = "xpqgyldp";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const endpoint = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : "";

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) return;

    // If Formspree is not set up — opens the mail app directly (fallback)
    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="cform">
      <div className="cform-row">
        <div className="cform-field">
          <label className="cform-label">Name</label>
          <input
            className="cform-input"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="cform-field">
          <label className="cform-label">Email</label>
          <input
            className="cform-input"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <label className="cform-label">Message</label>
      <textarea
        className="cform-textarea"
        placeholder="Write your message here..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        className="btn btn-primary cform-btn"
        onClick={handleSubmit}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "ok" && (
        <div className="cform-note ok">Thank you for reaching out. I&apos;ll get back to you soon.</div>
      )}
      {status === "error" && (
        <div className="cform-note err">
          Something went wrong. Please email me directly at {email}.
        </div>
      )}
    </div>
  );
}
