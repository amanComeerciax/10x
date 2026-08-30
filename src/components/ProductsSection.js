"use client";
import { useState } from "react";
import Image from "next/image";
import QuoteModal from "./QuoteModal";

const importProducts = [
  {
    name: "KIDS WEAR",
    origin: "Imported from China to India",
    image: "/images/kids_wear.png",
    category: "Import Product",
    description: "High-quality, trendy, and comfortable children's apparel imported directly from leading Chinese manufacturers for bulk Indian wholesale.",
    highlights: ["100% Breathable Cotton & Fabrics", "Vibrant Designs & Modern Patterns", "Strict Compliance & Quality Checked", "Bulk Quantity Wholesale Supply"]
  },
  {
    name: "MENS WEAR",
    origin: "Imported from China to India",
    image: "/images/mens_wear.png",
    category: "Import Product",
    description: "Premium casual & formal menswear apparel imported from top textile hubs in China, suitable for Indian retail & distribution.",
    highlights: ["Durable Fabric & Fine Stitching", "Casual Shirts, Denim & Activewear", "Competitive Wholesale Pricing", "Custom Packaging Options"]
  },
  {
    name: "BEAUTY COSMETICS",
    origin: "Imported from China to India",
    image: "/images/beauty_cosmetics.png",
    category: "Import Product",
    description: "Safe, tested, and high-demand skincare, makeup, and personal care cosmetics imported under strict customs & health regulations.",
    highlights: ["ISO & Safety Certified Products", "Skincare, Haircare & Makeup Range", "Attractive Retail Packaging", "Bulk Import Customs Cleared"]
  },
  {
    name: "LADIES WEAR",
    origin: "Imported from China to India",
    image: "/images/ladies_wear.png",
    category: "Import Product",
    description: "Fashion-forward womenswear including ethnic, western dresses, and outerwear imported from premium Chinese factories.",
    highlights: ["Latest Fashion Trends & Styles", "Premium Silk, Cotton & Synthetic Blends", "Wide Range of Sizes & Colorways", "Fast Logistics & Air/Sea Freight"]
  },
  {
    name: "UNDER GARMENTS",
    origin: "Imported from China to India",
    image: "/images/undergarments.png",
    category: "Import Product",
    description: "Comfortable, high-elasticity innerwear for men, women, and kids produced by certified overseas manufacturing partners.",
    highlights: ["Seamless & Ergonomic Design", "Anti-bacterial & Soft Fabric", "High Volume Wholesale Packaging", "Tested for Maximum Comfort"]
  },
  {
    name: "& MUCH MORE",
    origin: "Imported from China to India",
    image: "/images/more_imports.png",
    category: "Import Product",
    description: "Diverse range of consumer goods, electronics accessories, and lifestyle products customized according to Indian importer specifications.",
    highlights: ["Custom Sourcing on Demand", "Factory Audits & Quality Inspection", "Complete Customs Door-to-Door Service", "Flexible MOQ Options"]
  },
];

const agriExports = [
  {
    name: "RICE",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/rice.png",
    category: "Agri Export",
    description: "Premium grade 1121 Steam, Sella & Raw Basmati as well as Non-Basmati rice sourced from Indian fertile fields and exported to UAE.",
    highlights: ["Extra Long Grain (Aged Rice)", "Double Polished & Sortex Cleaned", "Moisture Controlled & Vacuum Sealed", "APEDA Certified Export Quality"]
  },
  {
    name: "FRUITS",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/fruits.png",
    category: "Agri Export",
    description: "Fresh farm-harvested Indian fruits including Mangoes, Pomegranates, Bananas, and Grapes transported under cold-chain logistics.",
    highlights: ["Freshly Harvested Premium Quality", "Reefer Container Cold Chain Shipping", "Zero Chemical Residue Compliance", "Phytosanitary Certified Cargo"]
  },
  {
    name: "VEGETABLES",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/vegetables.png",
    category: "Agri Export",
    description: "Farm-picked fresh vegetables like Onions, Potatoes, Green Chillies, and Okra sorted, graded, and packed for rapid Gulf shipment.",
    highlights: ["Daily Fresh Harvest Sourcing", "Ventilated & Temperature Controlled Packaging", "Global GAP & Export Standard Certified", "Timely Air & Sea Freight Delivery"]
  },
  {
    name: "PULSES",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/pulses.png",
    category: "Agri Export",
    description: "Nutritious Indian pulses and lentils including Chickpeas (Kabuli Chana), Red Lentils (Masoor), and Yellow Dal cleaned & machine sorted.",
    highlights: ["High Protein & Nutrient Rich", "Machine Cleaned & De-stoned", "Bulk Jute & PP Bag Packaging", "Competitive International Rates"]
  },
  {
    name: "SPICES",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/spices.png",
    category: "Agri Export",
    description: "Aromatic Indian whole & ground spices including Turmeric, Cumin, Red Chilli, and Cardamom sourced directly from spice capitals.",
    highlights: ["High Essential Oil Content & Aroma", "Spices Board of India Certified", "Aflatoxin & Pesticide Tested", "Custom Private Label Packaging Available"]
  },
  {
    name: "& MUCH MORE",
    origin: "Export to UAE & Gulf Countries",
    image: "/images/more_agri.png",
    category: "Agri Export",
    description: "Wide assortment of agro-commodities including oilseeds, dry fruits, and food grains tailored for international food distributors.",
    highlights: ["Flexible Bulk Container Loads", "Comprehensive Lab Test Reports", "Reliable Supply Chain Operations", "End-to-End Export Documentation"]
  },
];

const industrialExports = [
  {
    name: "BUILDING SAFETY TOOLS",
    origin: "Export to Africa & South Africa",
    image: "/images/safety_tools.png",
    category: "Industrial Export",
    description: "Heavy-duty construction safety gear including hard hats, high-visibility reflective vests, safety boots, and fall protection harnesses.",
    highlights: ["CE & ANSI Certified Safety Equipment", "Impact & Fire-resistant Materials", "Essential Infrastructure Project Supply", "Bulk Industrial Export Packaging"]
  },
  {
    name: "HARDWARE MATERIAL",
    origin: "Export to Africa & South Africa",
    image: "/images/hardware_material.png",
    category: "Industrial Export",
    description: "Comprehensive range of building hardware, fasteners, steel wire, pipe fittings, and manual tools for construction in Africa.",
    highlights: ["Corrosion-Resistant Galvanized Steel", "High Tensile Strength Fasteners & Fittings", "Full Container Load (FCL) Shipping", "Custom Specifications Welcome"]
  },
  {
    name: "MACHINERY",
    origin: "Export to Africa & South Africa",
    image: "/images/machinery.png",
    category: "Industrial Export",
    description: "Industrial manufacturing equipment, food processing machinery, packaging machines, and agricultural processing equipment.",
    highlights: ["Heavy-Duty Motor & Build Quality", "Spare Parts & Installation Support", "Export Wooden Crate Packaging", "High Production Efficiency"]
  },
  {
    name: "TRUCKS, DUMPERS, JCB",
    origin: "Export to Africa & South Africa",
    image: "/images/trucks_dumpers.png",
    category: "Industrial Export",
    description: "Commercial heavy vehicles, hydraulic dump trucks, excavators, and earthmoving machinery exported for mining and road projects.",
    highlights: ["Thoroughly Inspected Heavy Machinery", "Ro-Ro & Flat Rack Shipping Solutions", "Mining & Construction Site Ready", "Reliable Spare Parts Network"]
  },
  {
    name: "RICE & SPICES",
    origin: "Export to Africa & South Africa",
    image: "/images/rice_spices_export.png",
    category: "Industrial Export",
    description: "Bulk shipment of food grains, parboiled rice, and spices specifically packed for African commercial food importers and agencies.",
    highlights: ["Cost-Effective Freight Solutions", "High Shelf-Life Sealed Packaging", "SGS & Cotecna Inspection Ready", "Long-term Supply Contracts"]
  },
  {
    name: "& MUCH MORE",
    origin: "Export to Africa & South Africa",
    image: "/images/more_industrial.png",
    category: "Industrial Export",
    description: "Custom sourcing of industrial goods, electrical components, and heavy engineering products for overseas projects.",
    highlights: ["One-stop Procurement Solution", "Rigorous Pre-shipment Inspection", "Direct Port-to-Port Logistics", "Dedicated Account Management"]
  },
];

export default function ProductsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWhatsAppInquiry = (productName) => {
    const phone = "917984488660";
    const text = encodeURIComponent(`Hello 10X International, I want to inquire about product: ${productName}. Please share details and pricing.`);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="section" id="products">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-title-decorated">
            <span className="section-title-line"></span>
            <h2 className="section-title">OUR PREMIUM PRODUCTS</h2>
            <span className="section-title-line"></span>
          </div>
        </div>

        {/* Agri Exports */}
        <div className="products-grid">
          {agriExports.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-card-image">
                <Image src={p.image} alt={p.name} width={300} height={200} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                <div className="product-card-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="product-card-body">
                <div className="product-card-name">{p.name}</div>
                <div className="product-card-origin">{p.origin}</div>
                <button className="view-detail-link-btn" onClick={() => setSelectedProduct(p)}>
                  VIEW DETAILS &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Import Products */}
        <div className="products-grid">
          {importProducts.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-card-image">
                <Image src={p.image} alt={p.name} width={300} height={200} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                <div className="product-card-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="product-card-body">
                <div className="product-card-name">{p.name}</div>
                <div className="product-card-origin">{p.origin}</div>
                <button className="view-detail-link-btn" onClick={() => setSelectedProduct(p)}>
                  VIEW DETAILS &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Exports */}
        <div className="products-grid">
          {industrialExports.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-card-image">
                <Image src={p.image} alt={p.name} width={300} height={200} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                <div className="product-card-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="product-card-body">
                <div className="product-card-name">{p.name}</div>
                <div className="product-card-origin">{p.origin}</div>
                <button className="view-detail-link-btn" onClick={() => setSelectedProduct(p)}>
                  VIEW DETAILS &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-btn" onClick={() => setIsQuoteModalOpen(true)} style={{ border: 'none', cursor: 'pointer', marginTop: '40px' }}>
          GET INQUIRY
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        {/* Product Detail Modal */}
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
                  <h3 className="product-modal-title">{selectedProduct.name}</h3>
                  <div className="product-modal-origin-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                    {selectedProduct.origin}
                  </div>

                  <p className="product-modal-desc">{selectedProduct.description}</p>

                  <div className="product-modal-highlights">
                    <h4>Key Product Features & Standards:</h4>
                    <ul>
                      {selectedProduct.highlights.map((h, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="product-modal-inquire-btn"
                    onClick={() => handleWhatsAppInquiry(selectedProduct.name)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.286-1.123z"/>
                    </svg>
                    INQUIRE NOW ON WHATSAPP
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      </div>
    </section>
  );
}
