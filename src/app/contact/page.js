import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import GSAPAnimations from "@/components/GSAPAnimations";

export const metadata = {
  title: "Contact Us | 10X International",
  description: "Get in touch with 10X International for your import-export needs.",
};

export default function ContactPage() {
  return (
    <>
      <GSAPAnimations />
      <Navbar />

      <section className="section bg-light" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: "50px" }}>
            <div className="section-label" style={{ background: "#F4EFE6", color: "#0F2537", padding: "6px 14px", borderRadius: "20px", display: "inline-block", fontSize: "12px", fontWeight: "700", marginBottom: "16px" }}>CONTACT US</div>
            <h1 className="section-title" style={{ marginBottom: "20px" }}>Let&apos;s Connect and Grow Together</h1>
            <p className="section-desc" style={{ maxWidth: "700px", margin: "0 auto", fontSize: "16px", color: "#64748B", lineHeight: "1.8" }}>
              Have questions about our import/export services? Want to request a quote or discuss a partnership? Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: "100px" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>
            {/* Contact Details */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ background: "#FAF7F2", padding: "40px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
                <h3 style={{ fontSize: "20px", color: "#0F172A", marginBottom: "30px", fontWeight: "700" }}>Get In Touch</h3>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "24px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F4EFE6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F2537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", marginBottom: "4px" }}>Phone</h4>
                    <p style={{ color: "#475569", fontSize: "15px" }}>+91 98765 43210</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#F4EFE6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F2537" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0F172A", marginBottom: "4px" }}>Email</h4>
                    <p style={{ color: "#475569", fontSize: "15px" }}>info@10xinternational.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div style={{ flex: 1.2, minWidth: "300px" }}>
              <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: "16px", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <h3 style={{ fontSize: "20px", color: "#0F172A", marginBottom: "20px", fontWeight: "700" }}>Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
