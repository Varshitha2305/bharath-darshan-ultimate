import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHead } from "@/components/site/PageHead";
import { FAQ } from "@/components/site/FAQ";
import { Counter } from "@/components/site/SiteChrome";
import { IMAGES, TESTIMONIALS } from "@/components/site/data";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery & Testimonials — Bharath Darshan Ultimate" },
      {
        name: "description",
        content:
          "A glimpse of our pilgrimages — temples, luxury coaches, heritage stays and stories from travellers who journeyed with Bharath Darshan Ultimate.",
      },
      { property: "og:title", content: "Gallery & Testimonials — Bharath Darshan Ultimate" },
      { property: "og:description", content: "Sacred moments, luxury travel and words from our devotees." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

type Shot = { src: string; caption: string };
const SHOTS: Shot[] = [
  { src: IMAGES.hero, caption: "Temple gopuram at golden hour" },
  { src: IMAGES.kashi, caption: "Ganga Aarti · Varanasi" },
  { src: IMAGES.aarti, caption: "Evening lamps · Aarti ceremony" },
  { src: IMAGES.kedarnath, caption: "Kedarnath · The Himalayas" },
  { src: IMAGES.bus, caption: "Our luxury Volvo coaches" },
  { src: IMAGES.tirupati, caption: "Tirumala · Andhra Pradesh" },
  { src: IMAGES.hotel, caption: "Heritage hotel lobbies" },
  { src: IMAGES.dwarka, caption: "Dwarkadhish · Gujarat" },
  { src: IMAGES.offering, caption: "Puja offerings" },
  { src: IMAGES.ayodhya, caption: "Ayodhya Ram Mandir" },
  { src: IMAGES.madurai, caption: "Meenakshi · Madurai" },
  { src: IMAGES.somnath, caption: "Somnath · Sunset Aarti" },
];

const FAQ_ITEMS = [
  { q: "Can I share photographs from my yatra?", a: "Absolutely — we love that. Tag @bharathdarshanultimate on Instagram or send them to hello@bharathdarshan.in for our travellers' wall." },
  { q: "Are photos permitted inside temples?", a: "This varies by temple. Our tour manager will advise you on the ground so you can capture memories respectfully wherever allowed." },
  { q: "Do you provide a group photo album?", a: "Yes — every group yatra concludes with a curated digital album shared with all travellers within a week." },
  { q: "How are testimonials collected?", a: "Every traveller receives a private post-yatra note. Testimonials are shared only with explicit permission — no reviews are ever fabricated." },
  { q: "May I speak with a past traveller?", a: "Of course. On request we happily connect prospective travellers with a past guest who has done a similar package." },
];

function GalleryPage() {
  const [open, setOpen] = useState<Shot | null>(null);

  return (
    <>
      <PageHead
        eyebrow="Gallery & Testimonials"
        title={<>Moments of <span className="bd-text-saffron">devotion & delight.</span></>}
        intro="A gallery of our yatras — temples, ceremonies, heritage stays and premium coaches — alongside heartfelt words from travellers who journeyed with us."
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery & Testimonials" }]}
      />

      {/* Stats */}
      <section className="py-5 bd-section-blue">
        <div className="container">
          <div className="row text-center">
            {[
              { n: 25000, s: "+", l: "Pilgrims Served" },
              { n: 12000, s: "+", l: "Photos Captured" },
              { n: 45, s: "+", l: "Sacred Sites" },
              { n: 98, s: "%", l: "5-Star Reviews" },
            ].map((s) => (
              <div key={s.l} className="col-6 col-md-3 bd-reveal">
                <div className="bd-stat" style={{ padding: "0.75rem" }}>
                  <div className="bd-stat-num" style={{ color: "var(--bd-primary)" }}>
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="bd-stat-label" style={{ color: "var(--bd-primary)", opacity: 0.7 }}>{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bd-section">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Photo Gallery</div>
            <h2 className="bd-section-title">Sacred moments, framed with care</h2>
          </div>
          <div className="bd-gallery">
            {SHOTS.map((s, i) => (
              <button
                key={i}
                className="bd-gallery-item"
                onClick={() => setOpen(s)}
                style={{ background: "transparent", border: 0, padding: 0, width: "100%", textAlign: "left" }}
                aria-label={`View ${s.caption}`}
              >
                <img src={s.src} alt={s.caption} width={1200} height={800} loading="lazy" />
                <div className="bd-gallery-cap">
                  <i className="bi bi-zoom-in me-2"></i>{s.caption}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bd-section bd-section-soft">
        <div className="container">
          <div className="text-center mb-5 bd-reveal">
            <div className="bd-eyebrow mb-2 justify-content-center d-inline-flex">Traveller Stories</div>
            <h2 className="bd-section-title">In their own words</h2>
          </div>
          <div className="row g-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="col-md-6 col-lg-4 bd-reveal">
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

      {/* FAQ */}
      <section className="bd-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 bd-reveal">
              <div className="bd-eyebrow mb-2">FAQ</div>
              <h2 className="bd-section-title mb-3">Photos & Stories</h2>
              <p className="bd-lead">A few common questions about our gallery and traveller reviews.</p>
              <Link to="/contact" className="bd-btn bd-btn-ghost mt-3">Share your story <i className="bi bi-arrow-right"></i></Link>
            </div>
            <div className="col-lg-7 bd-reveal">
              <FAQ items={FAQ_ITEMS} id="gallery-faq" />
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="bd-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={() => setOpen(null)}
        >
          <button className="bd-lightbox-close" aria-label="Close" onClick={() => setOpen(null)}>
            <i className="bi bi-x-lg"></i>
          </button>
          <img src={open.src} alt={open.caption} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
