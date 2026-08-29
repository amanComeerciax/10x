export default function WhyChooseUs() {
  const cards = [
    {
      title: "Quality Assurance",
      desc: "Strict quality checks at every stage.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B3A26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      title: "Competitive Pricing",
      desc: "Best market prices with unmatched quality.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B3A26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      )
    },
    {
      title: "Timely Delivery",
      desc: "On-time shipment with real-time tracking.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B3A26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      title: "Global Network",
      desc: "Strong network across the globe for smooth trade.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B3A26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Customer Support",
      desc: "24/7 support for your all queries.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B3A26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    },
  ];

  return (
    <section className="section why-choose" id="quality">
      <div className="container">
        <div className="section-header">
          <div className="section-label">WHY CHOOSE US</div>
          <h2 className="section-title">Committed to Quality &amp; Your Success</h2>
        </div>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div className="why-card" key={i}>
              <div className="why-card-icon-box">
                {c.icon}
              </div>
              <div className="why-card-text">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
