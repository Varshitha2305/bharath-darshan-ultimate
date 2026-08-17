import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHead } from "@/components/site/PageHead";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Bharath Darshan Ultimate" },
      {
        name: "description",
        content:
          "Speak with our pilgrimage experts. Plan a Char Dham, Tirupati, Kashi or custom yatra. Chennai office, phone, WhatsApp and email — we reply within a day.",
      },
      { property: "og:title", content: "Contact — Bharath Darshan Ultimate" },
      { property: "og:description", content: "Reach us to plan your pilgrimage journey." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const FAQ_ITEMS = [
  { q: "How quickly will you reply?", a: "Within the same working day for most enquiries. Urgent bookings are usually confirmed within 2 hours by phone or WhatsApp." },
  { q: "Do you have an office I can visit?", a: "Yes — our Chennai head office in T. Nagar is open Mon–Sat, 9:30 AM to 6:30 PM. Please call ahead so we can prepare tea and a proper itinerary chat." },
  { q: "Which languages do your team speak?", a: "English, Tamil, Telugu, Hindi, Kannada and Malayalam — across the team. Please tell us your preferred language when you write in." },
  { q: "Can I book on WhatsApp?", a: "Absolutely. WhatsApp is our fastest channel — click the green button on this page and one of our specialists will attend to you." },
  { q: "Do you offer video consultations?", a: "Yes — a 30-minute video consultation is complimentary. It's a lovely way to plan a family yatra without leaving your home." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHead
        eyebrow="Contact"
        title={<>Let's plan your <span className="bd-text-saffron">yatra together.</span></>}
        intro="Call, WhatsApp or write to us. We'll craft an itinerary that fits your family, your calendar and your devotion."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      {/* Contact grid */}
      <section className="bd-section">
        <div className="container">
          <div className="row g-4 mb-5">
            {[
              { i: "bi-geo-alt-fill", t: "Office", l1: "12 Heritage Avenue, T. Nagar", l2: "Chennai 600017, India" },
              { i: "bi-telephone-fill", t: "Phone", l1: <a href="tel:+919884032415" style={{ color: "inherit", textDecoration: "none" }}>+91 98840 32415</a>, l2: <a href="tel:+919884032415" style={{ color: "inherit", textDecoration: "none" }}>+91 98840 32415</a> },
              { i: "bi-envelope-fill", t: "Email", l1: "hello@bharathdarshan.in", l2: "bookings@bharathdarshan.in" },
              { i: "bi-clock-fill", t: "Business Hours", l1: "Mon – Sat: 9:30 AM – 6:30 PM", l2: "Sun: 10:00 AM – 2:00 PM" },
            ].map((c) => (
              <div key={c.t} className="col-md-6 col-lg-3 bd-reveal">
                <div className="bd-contact-card">
                  <div className="bd-contact-icon"><i className={`bi ${c.i}`}></i></div>
                  <h4 style={{ fontSize: "1.15rem" }} className="mb-2">{c.t}</h4>
                  <div style={{ color: "var(--bd-muted)", lineHeight: 1.65 }}>
                    <div>{c.l1}</div>
                    <div>{c.l2}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4">
            {/* Form */}
            <div className="col-lg-7 bd-reveal">
              <div className="bd-contact-card p-4 p-md-5">
                <div className="bd-eyebrow mb-2">Send us a note</div>
                <h3 className="mb-4" style={{ fontSize: "1.8rem" }}>Tell us about your yatra</h3>

                {sent && (
                  <div className="alert" role="status" style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#0f7a3f", borderRadius: 12 }}>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you — we've received your enquiry and will reply within the day.
                  </div>
                )}

                <form onSubmit={submit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="bd-form-label" htmlFor="c-name">Your name</label>
                      <input id="c-name" name="name" required className="bd-form-control" placeholder="Full name" />
                    </div>
                    <div className="col-md-6">
                      <label className="bd-form-label" htmlFor="c-phone">Phone (with country code)</label>
                      <input id="c-phone" name="phone" required className="bd-form-control" placeholder="+91 ..." />
                    </div>
                    <div className="col-md-6">
                      <label className="bd-form-label" htmlFor="c-email">Email</label>
                      <input id="c-email" type="email" name="email" required className="bd-form-control" placeholder="you@example.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="bd-form-label" htmlFor="c-pkg">Interested in</label>
                      <select id="c-pkg" name="package" className="bd-form-control">
                        <option>Char Dham Yatra</option>
                        <option>Tirupati Special Darshan</option>
                        <option>Kashi Spiritual Journey</option>
                        <option>Jyotirlinga Yatra</option>
                        <option>South India Temple Tour</option>
                        <option>Custom / Private Yatra</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="bd-form-label" htmlFor="c-msg">Tell us more</label>
                      <textarea id="c-msg" name="message" className="bd-form-control" placeholder="Preferred dates, number of travellers, hotel category, any special requirements…" />
                    </div>
                    <div className="col-12 d-flex flex-wrap gap-3 pt-2">
                      <button type="submit" className="bd-btn bd-btn-primary">
                        Send Enquiry <i className="bi bi-arrow-right"></i>
                      </button>
                      <a
                        href="https://wa.me/919884032415?text=Hello%20Bharath%20Darshan%20Ultimate%2C%20I%20would%20like%20to%20know%20more%20about%20your%20pilgrimage%20tour%20packages."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bd-btn bd-btn-ghost"
                        style={{ borderColor: "#25d366", color: "#25d366" }}
                      >
                        <i className="bi bi-whatsapp"></i> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar: Map + social */}
            <div className="col-lg-5 bd-reveal">
              <div className="bd-contact-card p-0 overflow-hidden">
                <div style={{ aspectRatio: "4/3", background: "linear-gradient(135deg, var(--bd-bg-soft), #fff)", position: "relative", display: "grid", placeItems: "center", color: "var(--bd-primary)", textAlign: "center", padding: "2rem" }}>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "3rem", color: "var(--bd-secondary)" }}></i>
                  <div className="mt-3 bd-serif" style={{ fontSize: "1.4rem" }}>Find us in Chennai</div>
                  <div className="mt-1" style={{ color: "var(--bd-muted)", fontSize: "0.9rem" }}>
                    12 Heritage Avenue, T. Nagar, Chennai 600017
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bd-btn bd-btn-ghost mt-3">
                    Open in Google Maps <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
              <div className="bd-contact-card mt-4">
                <div className="bd-eyebrow mb-3">Follow us</div>
                <div className="d-flex gap-2">
                  {[
                    { i: "bi-facebook", l: "Facebook" },
                    { i: "bi-instagram", l: "Instagram" },
                    { i: "bi-youtube", l: "YouTube" },
                    { i: "bi-whatsapp", l: "WhatsApp" },
                  ].map((s) => (
                    <a
                      key={s.l}
                      href="#"
                      aria-label={s.l}
                      style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(0,53,96,0.08)", color: "var(--bd-primary)", display: "grid", placeItems: "center", textDecoration: "none", fontSize: "1.1rem" }}
                    >
                      <i className={`bi ${s.i}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 bd-reveal">
              <div className="bd-eyebrow mb-2">FAQ</div>
              <h2 className="bd-section-title mb-3">Getting in touch</h2>
              <p className="bd-lead">Common questions travellers ask before writing to us.</p>
            </div>
            <div className="col-lg-7 bd-reveal">
              <FAQ items={FAQ_ITEMS} id="contact-faq" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
