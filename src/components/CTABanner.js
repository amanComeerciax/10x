export default function CTABanner() {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-left">
            <div className="cta-icon-circle">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B3A26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="cta-text-box">
              <h3>Let&apos;s Grow Together</h3>
              <p>Connect with us today for premium quality products and reliable global trade services.</p>
            </div>
          </div>

          <a href="#contact" className="cta-btn-white">
            GET IN TOUCH
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
