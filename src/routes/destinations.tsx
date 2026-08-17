import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "@/components/site/PageHead";
import { FAQ } from "@/components/site/FAQ";
import { DESTINATIONS, PACKAGES } from "@/components/site/data";

export const Route = createFileRoute("/destinations")({
  component: DestinationsPage,
  head: () => ({
    meta: [
      { title: "Destinations & Tour Packages — Bharath Darshan Ultimate" },
      {
        name: "description",
        content:
          "Explore premium pilgrimage tour packages — Char Dham, Tirupati, Kashi, Rameswaram, Jyotirlingas and more — with luxury stays and expert priests.",
      },
      { property: "og:title", content: "Destinations & Tour Packages — Bharath Darshan Ultimate" },
      { property: "og:description", content: "Sacred destinations across India, in premium packages." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
});

const FAQ_ITEMS = [
  { q: "Can I customise the itinerary of a package?", a: "Absolutely. Every package is a starting point — dates, hotels, add-ons like helicopter darshan or private vehicles can all be tailored." },
  { q: "Are helicopter darshans available for Char Dham?", a: "Yes. We offer both full-heli and hybrid coach+heli Char Dham options, subject to weather and season permits." },
  { q: "What is the group size on a typical yatra?", a: "Our group tours are limited to 20–24 travellers on a Volvo AC coach. Private yatras are, of course, just your family." },
  { q: "Do the packages include flights?", a: "Some pan-India packages (like the Jyotirlinga Yatra) include flights. Regional packages typically begin from the yatra city — we're happy to add flights on request." },
  { q: "What is your cancellation policy?", a: "Full refund up to 30 days before departure; graduated fees thereafter. Complete details are shared with your booking confirmation." },
  { q: "Are darshan queues avoided or shortened?", a: "Wherever possible, yes — we arrange protocol/special darshan at Tirupati, Kashi Vishwanath, Somnath and other major temples." },
];

function DestinationsPage() {
  return (
    <>
      <PageHead
        eyebrow="Destinations & Packages"
        title={<>Sacred India, <span className="bd-text-saffron">beautifully organised.</span></>}
        intro="From the Himalayan Char Dham to the coasts of Rameswaram — every destination we visit, and every package we craft."
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations & Packages" }]}
      />

      {/* Destinations grid */}
      <section className="bd-section">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Pilgrimage Destinations</div>
            <h2 className="bd-section-title">Eleven sacred places</h2>
            <p className="bd-lead mx-auto">Every destination visited by a Bharath Darshan Ultimate yatra — with priests, protocols and premium stays.</p>
          </div>
          <div className="row g-4">
            {DESTINATIONS.map((d) => (
              <div key={d.id} className="col-md-6 col-lg-4 bd-reveal">
                <article className="bd-card">
                  <div className="bd-card-media">
                    <img src={d.image} alt={`${d.name} — ${d.region}`} width={1200} height={800} loading="lazy" />
                    <span className="bd-card-badge">{d.region}</span>
                  </div>
                  <div className="bd-card-body">
                    <h3>{d.name}</h3>
                    <p>{d.desc}</p>
                    <ul className="list-unstyled mb-0 mt-1" style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {d.highlights.map((h) => (
                        <li key={h} style={{ fontSize: "0.78rem", background: "rgba(0,53,96,0.06)", color: "var(--bd-primary)", padding: "0.25rem 0.7rem", borderRadius: "999px" }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Tour Packages</div>
            <h2 className="bd-section-title">Signature yatras</h2>
            <p className="bd-lead mx-auto">Six flagship packages — every one refined over years of practice. Custom itineraries available on request.</p>
          </div>
          <div className="row g-4">
            {PACKAGES.map((p) => (
              <div key={p.id} className="col-md-6 col-lg-4 bd-reveal">
                <article className="bd-card">
                  <div className="bd-card-media">
                    <img src={p.image} alt={p.name} width={1200} height={800} loading="lazy" />
                    {p.badge && <span className="bd-card-badge">{p.badge}</span>}
                  </div>
                  <div className="bd-card-body">
                    <div className="bd-card-meta">
                      <span><i className="bi bi-calendar-week"></i> {p.duration}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="mt-1">
                      <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--bd-secondary)", fontWeight: 600, marginBottom: "0.4rem" }}>
                        Highlights
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {p.highlights.map((h) => (
                          <span key={h} style={{ fontSize: "0.78rem", background: "rgba(246,149,35,0.12)", color: "var(--bd-secondary-dark, #d97a10)", padding: "0.22rem 0.65rem", borderRadius: "999px" }}>
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-1">
                      <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--bd-primary)", fontWeight: 600, marginBottom: "0.4rem" }}>
                        Facilities
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {p.facilities.map((f) => (
                          <span key={f} style={{ fontSize: "0.78rem", background: "rgba(0,53,96,0.06)", color: "var(--bd-primary)", padding: "0.22rem 0.65rem", borderRadius: "999px" }}>
                            <i className="bi bi-check2 me-1"></i>{f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bd-card-foot">
                      <span className="bd-card-price">From {p.price}</span>
                      <Link to="/contact" className="bd-card-link">
                        Enquire <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bd-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 bd-reveal">
              <div className="bd-eyebrow mb-2">Frequently Asked</div>
              <h2 className="bd-section-title mb-3">Planning your yatra</h2>
              <p className="bd-lead">A few common questions our travellers ask. For anything else, please write to us.</p>
              <Link to="/contact" className="bd-btn bd-btn-ghost mt-3">Ask our team <i className="bi bi-arrow-right"></i></Link>
            </div>
            <div className="col-lg-7 bd-reveal">
              <FAQ items={FAQ_ITEMS} id="dest-faq" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
