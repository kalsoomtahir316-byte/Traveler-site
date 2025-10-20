import { useState } from "react";
import "../styles/contact.css";

const Icon = ({ children }) => (
  <span
    aria-hidden="true"
    style={{
      display: "inline-grid",
      placeItems: "center",
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "#1565c0",
      color: "#fff",
      fontSize: 14,
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

 export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [busy, setBusy] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const nameOk = form.name.trim().length >= 2;
  const msgOk = form.message.trim().length >= 10;
  const canSend = emailOk && nameOk && msgOk && !busy;

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSend) return;
    setBusy(true);
    setStatus({ type: "", msg: "" });

    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus({ type: "ok", msg: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "err",
        msg: "Something went wrong. Please try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="contact-wrap">
      <div className="contact-shell">
        <section className="card contact-info" aria-labelledby="ctitle">
          <h2 id="ctitle">Contact</h2>
          <p className="lead">
            Have a question, quote request, or booking issue? We’ll respond
            shortly.
          </p>

          <div className="info-list">
            <div className="info-item">
              <Icon>📍</Icon>
              <div>
                <strong>Office:</strong>
                <br />
                2nd Floor, Traveler Plaza, Main Lahore
              </div>
            </div>
            <div className="info-item">
              <Icon>✉️</Icon>
              <div>
                <strong>Email:</strong>
                <br />
                hello@traveler.example
              </div>
            </div>
            <div className="info-item">
              <Icon>📞</Icon>
              <div>
                <strong>Phone:</strong>
                <br />
                +92 300 1234567 (10am–6pm)
              </div>
            </div>
          </div>

          <p className="note">
             For urgent bookings, please contact us directly by phone.
          </p>
        </section>

        <section className="card contact-form" aria-label="Send us a message">
          <h3>Send a Message</h3>

          <form onSubmit={onSubmit} noValidate>
            <div className="form-grid two">
              <div className="input">
                <input
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  aria-invalid={!nameOk}
                />
                {!nameOk && form.name !== "" && (
                  <div className="helper error">
                    Name must be at least 2 characters
                  </div>
                )}
              </div>

              <div className="input">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  aria-invalid={!emailOk}
                />
                {!emailOk && form.email !== "" && (
                  <div className="helper error">Enter a valid email</div>
                )}
              </div>
            </div>

            <div className="form-grid">
              <div className="input">
                <textarea
                  name="message"
                  placeholder="Your message (min 10 characters)"
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={!msgOk}
                />
                {!msgOk && form.message !== "" && (
                  <div className="helper error">
                    Message must be at least 10 characters
                  </div>
                )}
              </div>
            </div>

            <div className="actions">
              <button className="btn" disabled={!canSend}>
                {busy ? "Sending…" : "Send"}
              </button>
              <span className="note">We usually respond within 24 hours.</span>
            </div>

            {status.msg && (
              <div className={`toast ${status.type === "err" ? "err" : ""}`}>
                {status.msg}
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}