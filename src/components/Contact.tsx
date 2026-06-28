import React from "react";

interface ContactFormElement extends HTMLFormElement {}

function handleSubmit(e: React.FormEvent<ContactFormElement>): void {
  setTimeout(() => {
    e.currentTarget.reset();
  }, 3000);
}

const Contact: React.FC = () => {
  return (
    <div
      // @ts-ignore
      name="contact"
      className="contact w-full py-24"
      style={{ background: "#0a0a0f" }}
    >
      <div className="flex flex-col px-6 max-w-screen-lg mx-auto">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase mb-4"
          style={{ color: "#6c63ff", letterSpacing: "0.12em" }}
        >
          <span style={{ width: 20, height: 1, background: "#6c63ff", display: "inline-block" }} />
          Contact
        </span>

        <h2
          className="text-white font-bold mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
        >
          Let's build something together
        </h2>
        <p style={{ color: "#7a7a90", marginBottom: "2.5rem", fontSize: "0.95rem", maxWidth: 460 }}>
          I'm open to full-time roles, collaborations, and interesting side projects. Fill in the form or reach out directly.
        </p>

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/d3654820-08c6-438c-ba00-3965d1ef8b3b"
            style={{ width: "100%", maxWidth: 480, display: "flex", flexDirection: "column", gap: "0.875rem" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={{
                padding: "0.75rem 1rem",
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                color: "#f0f0f5",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "#6c63ff"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={{
                padding: "0.75rem 1rem",
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                color: "#f0f0f5",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "#6c63ff"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={7}
              required
              style={{
                padding: "0.75rem 1rem",
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                color: "#f0f0f5",
                fontSize: "0.9rem",
                outline: "none",
                resize: "vertical",
                transition: "border-color 0.2s",
              }}
              onFocus={e => { e.currentTarget.style.borderColor = "#6c63ff"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
            <button
              type="submit"
              style={{
                marginTop: "0.5rem",
                padding: "0.8rem 2rem",
                background: "#6c63ff",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "transform 0.18s, box-shadow 0.18s",
                alignSelf: "flex-start",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(108,99,255,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              Send message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
