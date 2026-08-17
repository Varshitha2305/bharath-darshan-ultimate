import { useEffect, useState } from "react";

/** Global effects: reveal-on-scroll observer + loader fade. */
export function SiteChrome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("bd-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    const observe = () => {
      document.querySelectorAll(".bd-reveal:not(.bd-in)").forEach((el) => io.observe(el));
    };
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div className={`bd-loader ${loading ? "" : "done"}`} aria-hidden={!loading}>
      <div className="bd-loader-ring" role="status" aria-label="Loading" />
    </div>
  );
}

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={`bd-scrolltop ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}

const WHATSAPP_URL =
  "https://wa.me/919884032415?text=Hello%20Bharath%20Darshan%20Ultimate%2C%20I%20would%20like%20to%20know%20more%20about%20your%20pilgrimage%20tour%20packages.";

export function WhatsAppFloat() {
  return (
    <a
      className="bd-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

/** Animated counter — starts when in view. */
export function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    let raf = 0;
    let start = 0;
    let began = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !began) {
            began = true;
            const t0 = performance.now();
            const step = (t: number) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(start + (to - start) * eased));
              if (p < 1) raf = requestAnimationFrame(step);
            };
            raf = requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(ref);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ref, to, duration]);

  return (
    <span ref={setRef}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
