import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const WHATSAPP_URL =
  "https://wa.me/919884032415?text=Hello%20Bharath%20Darshan%20Ultimate%2C%20I%20would%20like%20to%20know%20more%20about%20your%20pilgrimage%20tour%20packages.";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bd-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="bd-footer-brand-block">
              <Link to="/" className="navbar-brand bd-site-logo-link bd-site-logo-link-footer mb-3 text-decoration-none" aria-label="Bharath Darshan Ultimate — Home">
                <img
                  src={logo}
                  alt="Bharath Darshan Ultimate logo"
                  className="bd-site-logo bd-site-logo-footer"
                />
                <span className="bd-brand-text">
                  <span className="bd-brand-name text-white" style={{ color: "#fff" }}>
                    Bharath Darshan
                  </span>
                  <span className="bd-brand-tag">Ultimate</span>
                </span>
              </Link>
              <p className="bd-footer-description">
                India's premier luxury pilgrimage tour company — creating journeys of
                devotion with grace, care and quiet excellence since 2008.
              </p>
              <div className="bd-social">
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://youtube.com/@tamilagakoilulaa?si=64oG9MA9vGSptOb9" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h5>Quick Links</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/destinations">Destinations & Packages</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-3">
            <h5>Popular Yatras</h5>
            <Link to="/destinations">Char Dham Yatra</Link>
            <Link to="/destinations">Tirupati Special Darshan</Link>
            <Link to="/destinations">Kashi Spiritual Journey</Link>
            <Link to="/destinations">Jyotirlinga Yatra</Link>
            <Link to="/destinations">South India Temple Tour</Link>
          </div>

          <div className="col-lg-3">
            <h5>Reach Us</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill bd-text-saffron me-2"></i>
              12 Heritage Avenue, T. Nagar,<br />Chennai 600017, India
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill bd-text-saffron me-2"></i>
              <a href="tel:+919884032415" style={{ display: "inline" }}>+91 98840 32415</a>
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope-fill bd-text-saffron me-2"></i>
              <a href="mailto:hello@bharathdarshan.in" style={{ display: "inline" }}>hello@bharathdarshan.in</a>
            </p>
          </div>
        </div>

        <div className="bd-footer-bottom">
          <div className="bd-footer-copyright">© {year} Bharath Darshan Ultimate. All rights reserved.</div>
          <div className="bd-footer-legal">
            <a href="#" style={{ display: "inline" }}>Privacy Policy</a>
            <a href="#" style={{ display: "inline" }}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
