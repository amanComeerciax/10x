import Image from "next/image";

export default function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "SOURCING",
      desc: "Carefully selected quality products.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 1.4 8.2A7 7 0 0 1 11 20z"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "QUALITY CHECK",
      desc: "Strict quality inspection at every stage.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      num: "03",
      title: "PACKAGING",
      desc: "Hygienic & secure packaging.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      num: "04",
      title: "SHIPPING",
      desc: "Safe & timely delivery worldwide.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      )
    },
    {
      num: "05",
      title: "DELIVERY",
      desc: "Customer satisfaction is our priority.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="section process-section" id="services">
      <div className="process-wrapper-clean">
        <div className="container">
          <div className="process-content-grid">
            {/* Left Side: Header & Process Steps */}
            <div className="process-left-col">
              <div className="section-header align-left">
                <div className="section-label">OUR PROCESS</div>
                <h2 className="section-title">From India to the World</h2>
              </div>

              <div className="process-timeline-clean">
                {steps.map((s, i) => (
                  <div className="process-step-clean" key={i}>
                    <div className="process-circle-badge">
                      {s.icon}
                    </div>
                    <div className="process-text-wrap">
                      <div className="process-num-title">
                        <span className="process-num-text">{s.num}. </span>
                        <span className="process-step-title">{s.title}</span>
                      </div>
                      <p className="process-step-desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Commodity Spices Image */}
            <div className="process-right-col">
              <div className="process-image-container">
                <Image
                  src="/images/heros.png?v=2"
                  alt="10X International Premium Logistics and Export Process"
                  width={600}
                  height={500}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
