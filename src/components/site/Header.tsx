import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const NAV: { to: string; label: string; exact?: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About Us" },
  { to: "/destinations", label: "Destinations & Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(to + "/");

  return (
    <nav
      className={`bd-navbar navbar navbar-expand-lg fixed-top ${
        scrolled || open ? "bd-navbar-solid" : ""
      }`}
      aria-label="Primary"
    >
      <div className="container">
        <Link to="/" className="navbar-brand bd-site-logo-link" aria-label="Bharath Darshan Ultimate — Home">
          <img
            src={logo}
            alt="Bharath Darshan Ultimate logo"
            className="bd-site-logo"
          />
          <span className="bd-brand-text">
            <span className="bd-brand-name">Bharath Darshan</span>
            <span className="bd-brand-tag">Ultimate</span>
          </span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"} fs-3 bd-text-primary`}></i>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav mx-lg-auto align-items-lg-center gap-lg-1">
            {NAV.map((item) => (
              <li key={item.to} className="nav-item">
                <Link
                  to={item.to}
                  className={`nav-link ${isActive(item.to, item.exact) ? "bd-active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Link to="/contact" className="bd-btn bd-btn-primary">
              Plan Your Journey <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
