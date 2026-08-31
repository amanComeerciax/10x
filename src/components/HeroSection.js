import Image from "next/image";

export default function HeroSection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: "Global",
      subtitle: "Network",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "Best Quality",
      subtitle: "Products",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: "Timely",
      subtitle: "Delivery",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B5E20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: "Competitive",
      subtitle: "Pricing",
    },
  ];

  return (
    <section className="hero-clean" id="home">
      <div className="container hero-clean-container">
        {/* Left Column: Text & Features */}
        <div className="hero-clean-left">
          <div className="hero-clean-subtitle">
            GLOBAL TRADE. LIMITLESS POSSIBILITIES.
          </div>

          <h1 className="hero-clean-title">
            Your Trusted Partner in<br />
            <span className="text-green-highlight">Import &amp; Export</span>
          </h1>

          <p className="hero-clean-desc">
            Connecting global markets with trust and reliability. We specialize in importing premium apparel and cosmetics from China to India, while exporting top-quality agricultural goods to the UAE, and industrial machinery &amp; hardware across Africa.
          </p>

          <div className="hero-clean-features">
            {features.map((f, i) => (
              <div className="hero-clean-feature-item" key={i}>
                <div className="feature-icon-wrapper">
                  {f.icon}
                </div>
                <div className="feature-label-wrap">
                  <span className="feature-title">{f.title}</span>
                  <span className="feature-subtitle">{f.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="hero-clean-right">
          <div className="hero-image-box">
            <Image
              src="/images/image.png"
              alt="10X International Premium Commodities Import & Export Logistics"
              width={750}
              height={500}
              priority
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
