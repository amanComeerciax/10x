import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "About Us | 10X International",
  description: "Learn more about 10X International, a leading import-export company.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* About Hero */}
      <section className="section bg-light" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: "50px" }}>
            <div className="section-label" style={{ background: "#F4EFE6", color: "#0F2537", padding: "6px 14px", borderRadius: "20px", display: "inline-block", fontSize: "12px", fontWeight: "700", marginBottom: "16px" }}>ABOUT US</div>
            <h1 className="section-title" style={{ marginBottom: "20px" }}>Your Trusted Partner in Global Trade</h1>
            <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto", fontSize: "16px", color: "#64748B", lineHeight: "1.8" }}>
              10X International is a premier import-export firm based in Ahmedabad, Gujarat, India. With a robust global network, we bridge the gap between quality manufacturers and international markets.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
            <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "16px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "#0F2537" }}></div>
              <h3 style={{ fontSize: "22px", color: "#0F172A", marginBottom: "16px", fontWeight: "800" }}>Our Vision</h3>
              <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "15px" }}>
                To become the most reliable and efficient global trading partner, creating value for our clients by delivering premium quality products seamlessly across borders.
              </p>
            </div>
            <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "16px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: "#0F2537" }}></div>
              <h3 style={{ fontSize: "22px", color: "#0F172A", marginBottom: "16px", fontWeight: "800" }}>Our Mission</h3>
              <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "15px" }}>
                We strive to uphold the highest standards of integrity and transparency in trade. By maintaining strict quality checks and timely deliveries, we aim to foster long-term partnerships worldwide.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "50px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: 1.5, minWidth: "300px" }}>
              <h2 style={{ fontSize: "28px", color: "#0F172A", marginBottom: "20px", fontWeight: "800" }}>What We Do</h2>
              <div style={{ width: "60px", height: "4px", background: "#0F2537", marginBottom: "24px", borderRadius: "2px" }}></div>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "16px", fontSize: "15px" }}>
                At <strong style={{ color: "#0F172A" }}>10X International</strong>, we specialize in high-volume trade across diverse sectors. <br/><br/>
                <strong style={{ color: "#0F2537" }}>Imports:</strong> We import kids wear, mens wear, beauty cosmetics, ladies under garments & much more from China to India, ensuring the latest trends and best quality for our domestic market.
              </p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "16px", fontSize: "15px" }}>
                <strong style={{ color: "#0F2537" }}>Exports:</strong> We export premium agricultural products like rice, fruits, vegetables, pulses, spices & much more to the UAE. We also export building safety tools, hardware material, machinery, trucks, dumpers, JCB, rice, spices & much more to Africa & South Africa.
              </p>
            </div>
            
            <div style={{ flex: 1, minWidth: "300px", background: "#0F2537", padding: "40px", borderRadius: "20px", color: "#FFFFFF", boxShadow: "0 20px 40px rgba(15, 37, 55, 0.15)" }}>
              <h3 style={{ fontSize: "20px", color: "#FFFFFF", marginBottom: "24px", fontWeight: "700", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "16px" }}>Corporate Identity</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "4px" }}>Firm Name</span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>10X INTERNATIONAL</span>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "4px" }}>Nature of Concern</span>
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>Partnership</span>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "4px" }}>IEC Code</span>
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#FDE047" }}>AADFZ3605M</span>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "4px" }}>Registered Office</span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>NR. HAJI BAWA NI KUI, 14/4, M.J.D. FARM, SARKHEJ ROAD, JUHAPURA, Ahmedabad, Gujarat - 380055</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
