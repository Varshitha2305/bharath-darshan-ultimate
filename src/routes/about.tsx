import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "@/components/site/PageHead";
import { FAQ } from "@/components/site/FAQ";
import { IMAGES } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Bharath Darshan Ultimate" },
      {
        name: "description",
        content:
          "Meet the team behind Bharath Darshan Ultimate — India's premier luxury pilgrimage tour company. Our story, mission, values and commitment to sacred travel.",
      },
      { property: "og:title", content: "About — Bharath Darshan Ultimate" },
      { property: "og:description", content: "Our story, mission, values and the people crafting India's finest pilgrimages." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const FAQ_ITEMS = [
  { q: "When was Bharath Darshan Ultimate founded?", a: "We were founded in 2008 in Chennai and have since grown into a pan-India pilgrimage company with a dedicated team of 40+ specialists." },
  { q: "What kind of travellers do you serve?", a: "Families, seniors, corporate wellness groups and repeat devotees seeking a dignified, curated pilgrimage experience across India." },
  { q: "Do you run charitable initiatives?", a: "Yes — a portion of every yatra supports temple restoration and priest welfare programs through our Seva Foundation." },
  { q: "Are your tour managers trained on scripture?", a: "All senior tour managers complete a two-year internal training on rituals, itinerary craft and traveller care before they lead a yatra." },
  { q: "What is your commitment to quality?", a: "We never oversell a coach, always vet a hotel personally, and travel with a shastra-versed acharya — because a pilgrimage should feel timeless." },
];

const TEAM = [
  { name: "Ravi Krishnan", role: "Founder & Chief Curator", initials: "RK" },
  { name: "Shanti Menon", role: "Head of Yatras", initials: "SM" },
  { name: "Acharya Balaji", role: "Priest & Ritual Advisor", initials: "AB" },
  { name: "Priya Ramanan", role: "Guest Experience Lead", initials: "PR" },
];

const TIMELINE = [
  { year: "2008", title: "Our first yatra", body: "A single Tirupati package for twelve travellers, run with devotion by our founder." },
  { year: "2013", title: "Char Dham Programme", body: "We introduced India's first fully-serviced luxury Char Dham circuit." },
  { year: "2017", title: "Southern Sojourns", body: "Expanded into the great Dravidian temple circuit with heritage stays." },
  { year: "2021", title: "Seva Foundation", body: "Launched our charity arm supporting temple restoration and priest welfare." },
  { year: "2024", title: "25,000 pilgrims", body: "Crossed 25,000 pilgrims served — with a 98% return-traveller rate." },
];

function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="About Us"
        title={<>A quiet commitment to <span className="bd-text-saffron">sacred travel.</span></>}
        intro="Since 2008, Bharath Darshan Ultimate has crafted pilgrimages that feel timeless — combining devotion, refinement and quiet excellence in equal measure."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <section className="bd-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 bd-reveal">
              <img
                src={IMAGES.kashi}
                alt="Ganga Aarti at Varanasi"
                width={1200}
                height={800}
                loading="lazy"
                className="w-100 rounded-4"
                style={{ boxShadow: "var(--bd-shadow-lg)" }}
              />
            </div>
            <div className="col-lg-6 bd-reveal">
              <div className="bd-eyebrow mb-3">Our Story</div>
              <h2 className="bd-section-title mb-3">Born of devotion, carried by craft.</h2>
              <p className="bd-lead mb-3">
                Bharath Darshan Ultimate began with a simple observation — that pilgrimages in India,
                even in the age of premium travel, still felt rushed, generic and impersonal. Our
                founder Ravi Krishnan set out to change that.
              </p>
              <p className="bd-lead">
                Sixteen years later, we are still guided by the same conviction: a yatra is not a
                trip. It is a sacrament. Every itinerary we craft, every priest we bring on board,
                every hotel we choose — all serve that single truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="row g-4">
            {[
              { i: "bi-compass", t: "Our Mission", d: "To make India's most sacred journeys feel dignified, joyful and complete — for every family, every generation." },
              { i: "bi-eye", t: "Our Vision", d: "To be the most trusted name in Indian pilgrimage travel — the standard by which quiet luxury and devotion are measured." },
              { i: "bi-award", t: "Our Values", d: "Reverence, refinement, honesty and care — the four principles behind every decision we take." },
              { i: "bi-heart", t: "Our Commitment", d: "Never oversell a coach. Always vet a hotel. Travel with a real priest. Answer the phone at 3am. Every time." },
            ].map((v) => (
              <div key={v.t} className="col-md-6 col-lg-3 bd-reveal">
                <div className="bd-feature h-100">
                  <div className="bd-feature-icon"><i className={`bi ${v.i}`}></i></div>
                  <h4>{v.t}</h4>
                  <p>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bd-section">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Meet Our Team</div>
            <h2 className="bd-section-title">People who love this work</h2>
          </div>
          <div className="row g-4">
            {TEAM.map((m) => (
              <div key={m.name} className="col-6 col-md-3 bd-reveal">
                <div className="bd-team-card">
                  <div className="bd-team-avatar">{m.initials}</div>
                  <h4 className="mb-1" style={{ fontSize: "1.15rem" }}>{m.name}</h4>
                  <div style={{ color: "var(--bd-muted)", fontSize: "0.9rem" }}>{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Our Journey</div>
            <h2 className="bd-section-title">A timeline of devotion</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bd-timeline">
                {TIMELINE.map((t) => (
                  <div key={t.year} className="bd-timeline-item bd-reveal">
                    <div className="bd-timeline-year">{t.year}</div>
                    <h4 className="mt-1 mb-2" style={{ fontSize: "1.3rem" }}>{t.title}</h4>
                    <p style={{ color: "var(--bd-muted)", margin: 0 }}>{t.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bd-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 bd-reveal">
              <div className="bd-eyebrow mb-2">FAQ</div>
              <h2 className="bd-section-title mb-3">Good to know</h2>
              <p className="bd-lead">Everything you might wonder about the company behind your yatra.</p>
              <Link to="/contact" className="bd-btn bd-btn-ghost mt-3">Speak to us <i className="bi bi-arrow-right"></i></Link>
            </div>
            <div className="col-lg-7 bd-reveal">
              <FAQ items={FAQ_ITEMS} id="about-faq" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
