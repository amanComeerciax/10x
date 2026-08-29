"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import GSAPAnimations from "@/components/GSAPAnimations";
import QuoteModal from "@/components/QuoteModal";

const all15Products = [
  // AGRI EXPORTS (5)
  {
    id: 1,
    name: "1121 BASMATI RICE",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/rice.png",
    category: "Agri Export",
    description: "Premium grade 1121 Steam, Sella & Raw Basmati as well as Non-Basmati rice sourced from Indian fertile fields and exported to UAE.",
    highlights: ["Extra Long Grain (Aged Rice)", "Double Polished & Sortex Cleaned", "Moisture Controlled & Vacuum Sealed", "APEDA Certified Export Quality"]
  },
  {
    id: 2,
    name: "FRESH TROPICAL FRUITS",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/fruits.png",
    category: "Agri Export",
    description: "Fresh farm-harvested Indian fruits including Alphonso Mangoes, Kesar Mangoes, Pomegranates, Bananas, and Grapes transported under cold-chain logistics.",
    highlights: ["Freshly Harvested Premium Quality", "Reefer Container Cold Chain Shipping", "Zero Chemical Residue Compliance", "Phytosanitary Certified Cargo"]
  },
  {
    id: 3,
    name: "FARM FRESH VEGETABLES",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/vegetables.png",
    category: "Agri Export",
    description: "Farm-picked fresh vegetables like Red Onions, Potatoes, Green Chillies, and Okra sorted, graded, and packed for rapid Gulf shipment.",
    highlights: ["Daily Fresh Harvest Sourcing", "Ventilated & Temperature Controlled Packaging", "Global GAP & Export Standard Certified", "Timely Air & Sea Freight Delivery"]
  },
  {
    id: 4,
    name: "PULSES & LENTILS",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/pulses.png",
    category: "Agri Export",
    description: "Nutritious Indian pulses and lentils including Chickpeas (Kabuli Chana), Red Lentils (Masoor), and Yellow Dal cleaned & machine sorted.",
    highlights: ["High Protein & Nutrient Rich", "Machine Cleaned & De-stoned", "Bulk Jute & PP Bag Packaging", "Competitive International Rates"]
  },
  {
    id: 5,
    name: "AUTHENTIC INDIAN SPICES",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/spices.png",
    category: "Agri Export",
    description: "Aromatic Indian whole & ground spices including Turmeric, Cumin, Red Chilli, Cardamom, and Coriander sourced directly from spice capitals.",
    highlights: ["High Essential Oil Content & Aroma", "Spices Board of India Certified", "Aflatoxin & Pesticide Tested", "Custom Private Label Packaging Available"]
  },

  // IMPORT PRODUCTS (5)
  {
    id: 6,
    name: "KIDS APPAREL & WEAR",
    origin: "Imported from China to India",
    image: "/images/kids_wear.png",
    category: "Import Product",
    description: "High-quality, trendy, and comfortable children's apparel imported directly from leading Chinese manufacturers for bulk Indian wholesale.",
    highlights: ["100% Breathable Cotton & Fabrics", "Vibrant Designs & Modern Patterns", "Strict Compliance & Quality Checked", "Bulk Quantity Wholesale Supply"]
  },
  {
    id: 7,
    name: "MENS FORMAL & CASUAL WEAR",
    origin: "Imported from China to India",
    image: "/images/mens_wear.png",
    category: "Import Product",
    description: "Premium casual & formal menswear apparel imported from top textile hubs in China, suitable for Indian retail & distribution.",
    highlights: ["Durable Fabric & Fine Stitching", "Casual Shirts, Denim & Activewear", "Competitive Wholesale Pricing", "Custom Packaging Options"]
  },
  {
    id: 8,
    name: "BEAUTY & PERSONAL CARE COSMETICS",
    origin: "Imported from China to India",
    image: "/images/beauty_cosmetics.png",
    category: "Import Product",
    description: "Safe, tested, and high-demand skincare, makeup, and personal care cosmetics imported under strict customs & health regulations.",
    highlights: ["ISO & Safety Certified Products", "Skincare, Haircare & Makeup Range", "Attractive Retail Packaging", "Bulk Import Customs Cleared"]
  },
  {
    id: 9,
    name: "LADIES FASHION & ETHNIC WEAR",
    origin: "Imported from China to India",
    image: "/images/ladies_wear.png",
    category: "Import Product",
    description: "Fashion-forward womenswear including ethnic, western dresses, and outerwear imported from premium Chinese factories.",
    highlights: ["Latest Fashion Trends & Styles", "Premium Silk, Cotton & Synthetic Blends", "Wide Range of Sizes & Colorways", "Fast Logistics & Air/Sea Freight"]
  },
  {
    id: 10,
    name: "COMFORT UNDER GARMENTS & INNERWEAR",
    origin: "Imported from China to India",
    image: "/images/kids_wear.png",
    category: "Import Product",
    description: "Comfortable, high-elasticity innerwear for men, women, and kids produced by certified overseas manufacturing partners.",
    highlights: ["Seamless & Ergonomic Design", "Anti-bacterial & Soft Fabric", "High Volume Wholesale Packaging", "Tested for Maximum Comfort"]
  },

  // INDUSTRIAL EXPORTS (5)
  {
    id: 11,
    name: "BUILDING SAFETY GEAR & TOOLS",
    origin: "Export to Africa & South Africa",
    image: "/images/safety_tools.png",
    category: "Industrial Export",
    description: "Heavy-duty construction safety gear including hard hats, high-visibility reflective vests, safety boots, and fall protection harnesses.",
    highlights: ["CE & ANSI Certified Safety Equipment", "Impact & Fire-resistant Materials", "Essential Infrastructure Project Supply", "Bulk Industrial Export Packaging"]
  },
  {
    id: 12,
    name: "HARDWARE & STEEL FASTENERS",
    origin: "Export to Africa & South Africa",
    image: "/images/hardware_material.png",
    category: "Industrial Export",
    description: "Comprehensive range of building hardware, fasteners, steel wire, pipe fittings, and manual tools for construction in Africa.",
    highlights: ["Corrosion-Resistant Galvanized Steel", "High Tensile Strength Fasteners & Fittings", "Full Container Load (FCL) Shipping", "Custom Specifications Welcome"]
  },
  {
    id: 13,
    name: "INDUSTRIAL MANUFACTURING MACHINERY",
    origin: "Export to Africa & South Africa",
    image: "/images/machinery.png",
    category: "Industrial Export",
    description: "Industrial manufacturing equipment, food processing machinery, packaging machines, and agricultural processing equipment.",
    highlights: ["Heavy-Duty Motor & Build Quality", "Spare Parts & Installation Support", "Export Wooden Crate Packaging", "High Production Efficiency"]
  },
  {
    id: 14,
    name: "COMMERCIAL TRUCKS, DUMPERS & JCB",
    origin: "Export to Africa & South Africa",
    image: "/images/trucks_dumpers.png",
    category: "Industrial Export",
    description: "Commercial heavy vehicles, hydraulic dump trucks, excavators, and earthmoving machinery exported for mining and road projects.",
    highlights: ["Thoroughly Inspected Heavy Machinery", "Ro-Ro & Flat Rack Shipping Solutions", "Mining & Construction Site Ready", "Reliable Spare Parts Network"]
  },
  {
    id: 15,
    name: "BULK GRAINS & COMMERCIAL SPICES",
    origin: "Export to Africa & South Africa",
    image: "/images/spices.png",
    category: "Industrial Export",
    description: "Bulk shipment of food grains, parboiled rice, and spices specifically packed for African commercial food importers and agencies.",
    highlights: ["Cost-Effective Freight Solutions", "High Shelf-Life Sealed Packaging", "SGS & Cotecna Inspection Ready", "Long-term Supply Contracts"]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const filteredProducts = activeCategory === "ALL" 
    ? all15Products 
    : all15Products.filter((p) => p.category.toUpperCase().includes(activeCategory));

  return (
    <>
      <GSAPAnimations />
      <Navbar />

      {/* Modern Hero Header */}
      <section className="products-hero-section">
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="products-hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            15 EXCLUSIVE GLOBAL TRADE CATEGORIES
          </div>
          
          <h1 style={{ fontSize: "38px", fontWeight: "900", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Our Global Product Catalog
          </h1>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "1.7" }}>
            Filter through our 15 certified product offerings across Agri Exports, Overseas Apparel Imports, and Heavy Industrial Machinery.
          </p>
        </div>
      </section>

      {/* Modern Showcase Content Section */}
      <section className="section" style={{ background: "#FAF7F2", padding: "50px 0 90px" }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {[
              { label: "ALL PRODUCTS", count: 15, value: "ALL" },
              { label: "AGRI EXPORTS", count: 5, value: "AGRI" },
              { label: "IMPORT PRODUCTS", count: 5, value: "IMPORT" },
              { label: "INDUSTRIAL EXPORTS", count: 5, value: "INDUSTRIAL" }
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "50px",
                  fontWeight: "800",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: activeCategory === tab.value ? "none" : "1px solid #EAE3D2",
                  background: activeCategory === tab.value ? "#0F2537" : "#FFFFFF",
                  color: activeCategory === tab.value ? "#FFFFFF" : "#475569",
                  boxShadow: activeCategory === tab.value ? "0 10px 25px rgba(15, 37, 55, 0.2)" : "0 4px 12px rgba(0,0,0,0.02)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span>{tab.label}</span>
                <span style={{
                  background: activeCategory === tab.value ? "rgba(255,255,255,0.2)" : "#F1F5F9",
                  color: activeCategory === tab.value ? "#FFFFFF" : "#64748B",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "11px",
                  fontWeight: "700"
                }}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Product Cards Showcase Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "#FFFFFF", borderRadius: "20px", border: "1px dashed #CBD5E1" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0F2537", marginBottom: "8px" }}>No products found in this category</h3>
              <p style={{ color: "#64748B", fontSize: "14px" }}>Click &quot;ALL PRODUCTS&quot; above to view our full catalog.</p>
            </div>
          ) : (
            <div className="modern-products-grid">
              {filteredProducts.map((p) => (
                <div className="modern-product-card" key={p.id}>
                  <div className="modern-product-img-box">
                    <Image 
                      src={p.image} 
                      alt={p.name} 
                      width={400} 
                      height={300} 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                    <div className="modern-card-tag">{p.category}</div>
                  </div>
                  
                  <div className="modern-card-body">
                    <h3 className="modern-card-title">{p.name}</h3>
                    <div className="modern-card-origin">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F2537" strokeWidth="2.5">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {p.origin}
                    </div>
                    <p className="modern-card-desc">{p.description}</p>
                    
                    <div className="modern-card-actions">
                      <button className="btn-quick-view" onClick={() => setSelectedProduct(p)}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        VIEW DETAILS
                      </button>
                      
                      <button 
                        className="btn-wa-direct"
                        title="Inquire via WhatsApp"
                        onClick={() => {
                          const text = `Hello 10X International!%0A%0AI am interested in inquiring about:*${p.name}* (${p.category}).%0APlease share bulk pricing and shipping details.`;
                          window.open(`https://wa.me/917984488660?text=${text}`, "_blank");
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 4.992l-1.417 5.176 5.302-1.391c1.455.794 3.097 1.213 4.77 1.214h.004c5.505 0 9.988-4.479 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062a9.923 9.923 0 00-7.068-2.932zm0 1.666c4.588 0 8.324 3.734 8.325 8.32 0 2.223-.865 4.312-2.438 5.885a8.271 8.271 0 01-5.887 2.435h-.003c-1.464 0-2.895-.386-4.14-1.118l-.297-.173-3.076.806.82-2.997-.19-.302a8.28 8.28 0 01-1.216-4.356c0-4.586 3.736-8.32 8.324-8.32z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Popup Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content product-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="product-modal-grid">
              <div className="product-modal-img-wrapper">
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  width={400} 
                  height={300} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} 
                />
                <span className="product-modal-tag">{selectedProduct.category}</span>
              </div>
              
              <div className="product-modal-details">
                <h2 className="product-modal-title">{selectedProduct.name}</h2>
                <div className="product-modal-origin">{selectedProduct.origin}</div>
                
                <p className="product-modal-desc">{selectedProduct.description}</p>
                
                <div className="product-modal-highlights">
                  <div className="product-modal-highlights-title">Key Product Features &amp; Standards:</div>
                  <ul>
                    {selectedProduct.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="product-modal-wa-btn"
                  onClick={() => {
                    const text = `Hello 10X International!%0A%0AI am interested in inquiring about:*${selectedProduct.name}* (${selectedProduct.category}).%0APlease share bulk pricing and shipping details.`;
                    window.open(`https://wa.me/917984488660?text=${text}`, "_blank");
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 4.992l-1.417 5.176 5.302-1.391c1.455.794 3.097 1.213 4.77 1.214h.004c5.505 0 9.988-4.479 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062a9.923 9.923 0 00-7.068-2.932zm0 1.666c4.588 0 8.324 3.734 8.325 8.32 0 2.223-.865 4.312-2.438 5.885a8.271 8.271 0 01-5.887 2.435h-.003c-1.464 0-2.895-.386-4.14-1.118l-.297-.173-3.076.806.82-2.997-.19-.302a8.28 8.28 0 01-1.216-4.356c0-4.586 3.736-8.32 8.324-8.32z"/>
                  </svg>
                  INQUIRE NOW ON WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <CTABanner />
      <Footer />
    </>
  );
}
