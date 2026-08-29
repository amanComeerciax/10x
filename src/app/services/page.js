import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import OurProcess from "@/components/OurProcess";
import GSAPAnimations from "@/components/GSAPAnimations";

export const metadata = {
  title: "Our Services | 10X International",
  description: "Explore the import and export services offered by 10X International.",
};

export default function ServicesPage() {
  return (
    <>
      <GSAPAnimations />
      <Navbar />

      <section className="section bg-light" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: "50px" }}>
            <div className="section-label" style={{ background: "#F4EFE6", color: "#0F2537", padding: "6px 14px", borderRadius: "20px", display: "inline-block", fontSize: "12px", fontWeight: "700", marginBottom: "16px" }}>OUR SERVICES</div>
            <h1 className="section-title" style={{ marginBottom: "20px" }}>Comprehensive Global Trade Solutions</h1>
            <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto", fontSize: "16px", color: "#64748B", lineHeight: "1.8" }}>
              At 10X International, we facilitate seamless international trade by connecting buyers and sellers across the globe. Our services are designed to ensure efficiency, reliability, and the highest quality standards.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ background: "#FFFFFF", paddingBottom: "80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "20px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", transition: "transform 0.3s" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#0F2537", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3L14.5 21a2 2 0 0 1-3.6 0L8 14l-7-2.9a2 2 0 0 1 0-3.6L21 3z"/></svg>
              </div>
              <h3 style={{ fontSize: "24px", color: "#0F172A", marginBottom: "16px", fontWeight: "800" }}>Export Services</h3>
              <p style={{ color: "#475569", lineHeight: "1.7", marginBottom: "16px", fontSize: "15px" }}>
                We specialize in exporting a wide variety of goods to the <strong>UAE, Africa, and South Africa</strong>. Our network ensures fast, reliable, and secure transit of goods globally.
              </p>
              <ul style={{ color: "#475569", lineHeight: "1.8", fontSize: "15px", paddingLeft: "20px" }}>
                <li><strong>Agricultural:</strong> Premium rice, fruits, vegetables, pulses, and spices.</li>
                <li><strong>Industrial:</strong> Building safety tools, hardware material, machinery, trucks, dumpers, and JCBs.</li>
              </ul>
            </div>
            
            <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "20px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", transition: "transform 0.3s" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#0F2537", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
              </div>
              <h3 style={{ fontSize: "24px", color: "#0F172A", marginBottom: "16px", fontWeight: "800" }}>Import Services</h3>
              <p style={{ color: "#475569", lineHeight: "1.7", marginBottom: "16px", fontSize: "15px" }}>
                We import high-demand products directly from <strong>China to India</strong>, ensuring competitive pricing and excellent quality for the domestic market.
              </p>
              <ul style={{ color: "#475569", lineHeight: "1.8", fontSize: "15px", paddingLeft: "20px" }}>
                <li><strong>Apparel:</strong> Kids wear, mens wear, and ladies under garments.</li>
                <li><strong>Cosmetics:</strong> Premium beauty cosmetics and personal care products.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <OurProcess />

      <CTABanner />
      <Footer />
    </>
  );
}
