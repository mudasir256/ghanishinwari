"use client";

import { useState } from "react";
import { EMAIL_MAILTO } from "@/lib/contact";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\nMessage:\n${message}`
    );
    window.location.href = `${EMAIL_MAILTO}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  if (submitted) {
    return (
      <div className="p-6 md:p-8 bg-white rounded-xl border border-[#E8DED4] text-center">
        <p className="text-[#6B2D2D] font-semibold">
          Thank you! Your email client will open to send your message.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-[#6B2D2D] text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-8 bg-white rounded-xl border border-[#E8DED4] shadow-sm space-y-4"
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-[#4a1a1a] mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-[#E8DED4] text-[#4a1a1a] placeholder-[#6B2D2D]/50 focus:outline-none focus:ring-2 focus:ring-[#6B2D2D]/40 focus:border-[#6B2D2D]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-[#4a1a1a] mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-[#E8DED4] text-[#4a1a1a] placeholder-[#6B2D2D]/50 focus:outline-none focus:ring-2 focus:ring-[#6B2D2D]/40 focus:border-[#6B2D2D]"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#4a1a1a] mb-1.5">
          Phone <span className="text-[#6B2D2D]/70 font-normal">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-[#E8DED4] text-[#4a1a1a] placeholder-[#6B2D2D]/50 focus:outline-none focus:ring-2 focus:ring-[#6B2D2D]/40 focus:border-[#6B2D2D]"
          placeholder="+92 300 1234567"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[#4a1a1a] mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-[#E8DED4] text-[#4a1a1a] placeholder-[#6B2D2D]/50 focus:outline-none focus:ring-2 focus:ring-[#6B2D2D]/40 focus:border-[#6B2D2D] resize-y min-h-[100px]"
          placeholder="Your message, reservation request, or question..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-[#6B2D2D] text-white font-semibold hover:bg-[#4a1a1a] transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
