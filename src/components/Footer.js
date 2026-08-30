export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col footer-about">
            <div className="logo-brand logo-brand-footer" style={{ marginBottom: "16px" }}>
              <div className="logo-10x logo-10x-footer">
                10<span className="logo-x-green">X</span>
              </div>
              <div className="logo-brand-text">
                <span className="brand-title brand-title-footer">INTERNATIONAL</span>
                <span className="brand-sub brand-sub-footer">IMPORT | EXPORT</span>
              </div>
            </div>
            <p>
              10X International is a leading import-export company. Specially we import kids wear, mens wear, beauty cosmetics, ladies under garments &amp; much more from China to India. We export agricultural, industrial &amp; construction products to UAE, Africa &amp; South Africa.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/#products">Products</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/quality">Quality</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Import Products */}
          <div className="footer-col">
            <h4>IMPORT PRODUCTS</h4>
            <ul>
              <li><a href="/#products">Kids Wear</a></li>
              <li><a href="/#products">Mens Wear</a></li>
              <li><a href="/#products">Beauty Cosmetics</a></li>
              <li><a href="/#products">Ladies Wear</a></li>
              <li><a href="/#products">Under Garments</a></li>
              <li><a href="/#products">& Much More</a></li>
            </ul>
          </div>

          {/* Export Agri */}
          <div className="footer-col">
            <h4>EXPORT PRODUCTS (AGRI)</h4>
            <ul>
              <li><a href="/#products">Rice</a></li>
              <li><a href="/#products">Fruits</a></li>
              <li><a href="/#products">Vegetables</a></li>
              <li><a href="/#products">Pulses</a></li>
              <li><a href="/#products">Spices</a></li>
              <li><a href="/#products">& Much More</a></li>
            </ul>
          </div>

          {/* Export Industrial */}
          <div className="footer-col">
            <h4>EXPORT PRODUCTS (INDUSTRIAL)</h4>
            <ul>
              <li><a href="/#products">Building Safety Tools</a></li>
              <li><a href="/#products">Hardware Material</a></li>
              <li><a href="/#products">Machinery</a></li>
              <li><a href="/#products">Trucks, Dumpers, JCB</a></li>
              <li><a href="/#products">Rice, Spices</a></li>
              <li><a href="/#products">& Much More</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>CONTACT US</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>info@10xinternational.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 10X International. All Rights Reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
