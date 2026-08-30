import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import GSAPAnimations from "@/components/GSAPAnimations";

export const metadata = {
  title: "Quality Assurance | 10X International",
  description: "Learn about 10X International's commitment to quality.",
};

export default function QualityPage() {
  return (
    <>
      <GSAPAnimations />
      <Navbar />

      <section className="section bg-light" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: "50px" }}>
            <div className="section-label" style={{ background: "#F4EFE6", color: "#0F2537", padding: "6px 14px", borderRadius: "20px", display: "inline-block", fontSize: "12px", fontWeight: "700", marginBottom: "16px" }}>QUALITY ASSURANCE</div>
            <h1 className="section-title" style={{ marginBottom: "20px" }}>Uncompromising Quality Standards</h1>
            <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto", fontSize: "16px", color: "#64748B", lineHeight: "1.8" }}>
              At 10X International, quality is not just a standard—it&apos;s a promise. We have implemented rigorous checking mechanisms to ensure our exports and imports meet global benchmarks.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#FFFFFF", paddingBottom: "60px" }}>
        <div className="container">
          <div className="quality-cert-card" style={{ background: "#0F2537", borderRadius: "24px", color: "#FFFFFF", display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center", boxShadow: "0 20px 40px rgba(15, 37, 55, 0.15)" }}>
            <div style={{ flex: 1, minWidth: "250px" }}>
              <div style={{ display: "inline-block", padding: "8px 16px", background: "rgba(255,255,255,0.1)", borderRadius: "20px", fontSize: "13px", fontWeight: "600", marginBottom: "20px" }}>CERTIFICATIONS</div>
              <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "20px", lineHeight: "1.3" }}>Govt. Approved Trade Partner</h2>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", lineHeight: "1.8", marginBottom: "30px" }}>
                We are a registered firm operating under the guidelines of the Ministry of Commerce and Industry, Government of India. Our robust compliance ensures safe and legal transit of goods worldwide.
              </p>
              
              <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#F4EFE6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0F2537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0F172A", margin: "0 0 4px 0" }}>GOVT. APPROVED TRADE PARTNER</h3>
                  <p style={{ color: "#475569", fontSize: "14px", margin: 0 }}>Directorate General of Foreign Trade Compliant</p>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: "250px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#FDE047" }}>Pre-shipment Inspection</h4>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>Every consignment undergoes thorough checks before packaging.</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#FDE047" }}>Secure Packaging</h4>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>International standard materials used to prevent transit damage.</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", gridColumn: "1 / -1" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#FDE047" }}>Compliance Tracking</h4>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>Real-time monitoring of regulatory compliance across borders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <CTABanner />
      <Footer />
    </>
  );
}
