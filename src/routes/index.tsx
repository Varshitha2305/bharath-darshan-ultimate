import { createFileRoute, Link } from "@tanstack/react-router";
import { IMAGES, DESTINATIONS, PACKAGES, TESTIMONIALS, FAQ_HOME } from "@/components/site/data";
import { FAQ } from "@/components/site/FAQ";
import { Counter } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Bharath Darshan Ultimate — Premium Pilgrimage Tours Across India" },
      {
        name: "description",
        content:
          "Luxury pilgrimage journeys across sacred India — Char Dham, Kashi, Tirupati, Rameswaram and more. Curated darshan, heritage stays, seasoned priests.",
      },
      { property: "og:title", content: "Bharath Darshan Ultimate — Premium Pilgrimage Tours" },
      { property: "og:description", content: "Curated luxury pilgrimages across India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const featuredDests = DESTINATIONS.slice(0, 6);
  const featuredPkgs = PACKAGES.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bd-hero">
        <div className="bd-hero-bg" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        <div className="container bd-hero-inner">
          <div className="row">
            <div className="col-lg-9 col-xl-8">
              <div className="bd-eyebrow mb-3">Devotion · Refined · Since 2008</div>
              <h1 className="bd-display mb-4">
                Sacred journeys, <span className="bd-text-saffron">exquisitely crafted.</span>
              </h1>
              <p className="bd-hero-tagline mb-4">
                India's most trusted luxury pilgrimage company — curated darshan, heritage stays and
                seasoned priests across the temples that shaped a civilisation.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/destinations" className="bd-btn bd-btn-primary">
                  Explore Yatras <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/contact" className="bd-btn bd-btn-outline">
                  Plan Your Journey
                </Link>
              </div>
              <div className="d-flex flex-wrap gap-4 mt-5" style={{ color: "rgba(255,255,255,0.85)" }}>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check bd-text-saffron"></i> 15+ years of trust
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-award bd-text-saffron"></i> 25,000+ pilgrims served
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-star-fill bd-text-saffron"></i> 4.9 / 5 rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 bd-reveal">
              <div className="bd-eyebrow mb-3">About Bharath Darshan Ultimate</div>
              <h2 className="bd-section-title mb-3">
                A pilgrimage should feel timeless — never rushed.
              </h2>
              <p className="bd-lead mb-4">
                For over a decade and a half we have quietly built India's most respected luxury
                pilgrimage practice. Every yatra is crafted with reverence: hand-picked heritage
                stays, priests who know the shastras, small groups, and a team that treats every
                traveller like family.
              </p>
              <div className="row g-3 mb-4">
                {[
                  { i: "bi-gem", t: "Premium Everything" },
                  { i: "bi-people", t: "Small Groups" },
                  { i: "bi-lightbulb", t: "Priest Guidance" },
                  { i: "bi-headset", t: "24×7 Support" },
                ].map((f) => (
                  <div key={f.t} className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <span className="bd-feature-icon" style={{ width: 44, height: 44, marginBottom: 0, fontSize: "1.1rem" }}>
                        <i className={`bi ${f.i}`}></i>
                      </span>
                      <strong style={{ color: "var(--bd-primary)" }}>{f.t}</strong>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="bd-btn bd-btn-ghost">
                Our Story <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-6 bd-reveal">
              <div className="position-relative">
                <img
                  src={IMAGES.aarti}
                  alt="Devotional aarti with brass oil lamps"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-100 rounded-4"
                  style={{ boxShadow: "var(--bd-shadow-lg)" }}
                />
                <div
                  className="position-absolute d-none d-md-block"
                  style={{
                    bottom: "-2rem",
                    left: "-2rem",
                    background: "#fff",
                    padding: "1.4rem 1.6rem",
                    borderRadius: "18px",
                    boxShadow: "var(--bd-shadow-md)",
                    borderLeft: "4px solid var(--bd-secondary)",
                    maxWidth: 260,
                  }}
                >
                  <div className="bd-serif" style={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--bd-primary)" }}>
                    15+
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--bd-muted)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
                    Years of devotion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="bd-section">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Featured Destinations</div>
            <h2 className="bd-section-title">Sacred places, awaiting you</h2>
            <p className="bd-lead mx-auto">Twelve of India's most revered pilgrimage sites — curated with care, visited with reverence.</p>
          </div>
          <div className="row g-4">
            {featuredDests.map((d) => (
              <div key={d.id} className="col-md-6 col-lg-4 bd-reveal">
                <article className="bd-card">
                  <div className="bd-card-media">
                    <img src={d.image} alt={`${d.name} temple`} width={1200} height={800} loading="lazy" />
                    <span className="bd-card-badge">{d.region}</span>
                  </div>
                  <div className="bd-card-body">
                    <h3>{d.name}</h3>
                    <p>{d.desc}</p>
                    <div className="bd-card-foot">
                      <Link to="/destinations" className="bd-card-link">
                        Explore <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/destinations" className="bd-btn bd-btn-ghost">
              View all destinations <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-5 bd-reveal">
            <div>
              <div className="bd-eyebrow mb-2">Signature Yatras</div>
              <h2 className="bd-section-title mb-0">Handcrafted pilgrimage packages</h2>
            </div>
            <Link to="/destinations" className="bd-btn bd-btn-ghost">
              All Packages <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="row g-4">
            {featuredPkgs.map((p) => (
              <div key={p.id} className="col-md-6 col-lg-4 bd-reveal">
                <article className="bd-card">
                  <div className="bd-card-media">
                    <img src={p.image} alt={p.name} width={1200} height={800} loading="lazy" />
                    {p.badge && <span className="bd-card-badge">{p.badge}</span>}
                  </div>
                  <div className="bd-card-body">
                    <div className="bd-card-meta">
                      <span><i className="bi bi-calendar-week"></i> {p.duration}</span>
                      <span><i className="bi bi-geo-alt"></i> {p.highlights.length} highlights</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="bd-card-foot">
                      <span className="bd-card-price">From {p.price}</span>
                      <Link to="/destinations" className="bd-card-link">
                        Details <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bd-section">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Why Choose Us</div>
            <h2 className="bd-section-title">The Bharath Darshan difference</h2>
          </div>
          <div className="row g-4">
            {[
              { i: "bi-gem", t: "Handpicked Heritage Stays", d: "Only refined properties — palace hotels, riverside havelis, mountain lodges vetted personally." },
              { i: "bi-book", t: "Learned Priests", d: "Every yatra travels with a shastra-versed acharya who leads pujas with authenticity." },
              { i: "bi-shield-check", t: "Priority Darshan", d: "Wherever permissible we arrange protocol and special darshan — no long queues, more devotion." },
              { i: "bi-heart-pulse", t: "Senior-Friendly", d: "Slower pacing, oxygen support, wheelchair access and sattvik meals throughout." },
              { i: "bi-people", t: "Small Groups", d: "Never crowded coaches. Intimate group sizes so every traveller is truly cared for." },
              { i: "bi-headset", t: "24×7 Concierge", d: "A dedicated tour manager plus 24×7 India helpdesk — every day of your journey." },
            ].map((f) => (
              <div key={f.t} className="col-md-6 col-lg-4 bd-reveal">
                <div className="bd-feature">
                  <div className="bd-feature-icon"><i className={`bi ${f.i}`}></i></div>
                  <h4>{f.t}</h4>
                  <p>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bd-section-dark py-5">
        <div className="container py-4">
          <div className="row text-center">
            <div className="col-6 col-md-3 bd-reveal">
              <div className="bd-stat">
                <div className="bd-stat-num"><Counter to={25000} suffix="+" /></div>
                <div className="bd-stat-label">Happy Pilgrims</div>
              </div>
            </div>
            <div className="col-6 col-md-3 bd-reveal">
              <div className="bd-stat">
                <div className="bd-stat-num"><Counter to={45} suffix="+" /></div>
                <div className="bd-stat-label">Sacred Sites</div>
              </div>
            </div>
            <div className="col-6 col-md-3 bd-reveal">
              <div className="bd-stat">
                <div className="bd-stat-num"><Counter to={15} suffix="+" /></div>
                <div className="bd-stat-label">Years of Service</div>
              </div>
            </div>
            <div className="col-6 col-md-3 bd-reveal">
              <div className="bd-stat">
                <div className="bd-stat-num"><Counter to={98} suffix="%" /></div>
                <div className="bd-stat-label">Return Travellers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Words from our travellers</div>
            <h2 className="bd-section-title">Journeys they'll remember always</h2>
          </div>
          <div className="row g-4">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="col-md-4 bd-reveal">
                <div className="bd-quote">
                  <div className="bd-quote-stars">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="bd-quote-text">"{t.text}"</p>
                  <div className="bd-quote-author">
                    <div className="bd-avatar">{t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}</div>
                    <div>
                      <div className="bd-quote-name">{t.name}</div>
                      <div className="bd-quote-city">{t.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bd-section-dark bd-section">
        <div className="container text-center bd-reveal">
          <div className="bd-eyebrow mb-3 justify-content-center d-inline-flex" style={{ color: "#ffd8a8" }}>Begin Your Yatra</div>
          <h2 className="bd-section-title mx-auto" style={{ maxWidth: "22ch" }}>
            Let us plan a pilgrimage worthy of your devotion.
          </h2>
          <p className="bd-lead mx-auto mt-3" style={{ color: "rgba(255,255,255,0.8)" }}>
            Share a wish list — Char Dham, Jyotirlingas, Tirupati, or a custom family yatra. We'll craft it end-to-end.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <Link to="/contact" className="bd-btn bd-btn-primary">Plan Your Journey <i className="bi bi-arrow-right"></i></Link>
            <a href="tel:+919884032415" className="bd-btn bd-btn-outline"><i className="bi bi-telephone"></i> Call +91 98840 32415</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bd-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 bd-reveal">
              <div className="bd-eyebrow mb-2">Frequently Asked</div>
              <h2 className="bd-section-title mb-3">Questions, answered.</h2>
              <p className="bd-lead">If you don't find your answer here, our team is a call, WhatsApp or email away.</p>
              <div className="d-flex gap-3 mt-3">
                <Link to="/contact" className="bd-btn bd-btn-ghost">Contact Us <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-7 bd-reveal">
              <FAQ items={FAQ_HOME} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
