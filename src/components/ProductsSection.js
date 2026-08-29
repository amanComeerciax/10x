import Image from "next/image";

const importProducts = [
  { name: "KIDS WEAR", origin: "Imported from China to India", image: "/images/kids_wear.png" },
  { name: "MENS WEAR", origin: "Imported from China to India", image: "/images/mens_wear.png" },
  { name: "BEAUTY COSMETICS", origin: "Imported from China to India", image: "/images/beauty_cosmetics.png" },
  { name: "LADIES WEAR", origin: "Imported from China to India", image: "/images/ladies_wear.png" },
  { name: "UNDER GARMENTS", origin: "Imported from China to India", image: "/images/kids_wear.png" },
  { name: "& MUCH MORE", origin: "Imported from China to India", image: "/images/beauty_cosmetics.png" },
];

const agriExports = [
  { name: "RICE", origin: "Export to UAE", image: "/images/rice.png" },
  { name: "FRUITS", origin: "Export to UAE", image: "/images/fruits.png" },
  { name: "VEGETABLES", origin: "Export to UAE", image: "/images/vegetables.png" },
  { name: "PULSES", origin: "Export to UAE", image: "/images/pulses.png" },
  { name: "SPICES", origin: "Export to UAE", image: "/images/spices.png" },
  { name: "& MUCH MORE", origin: "Export to UAE", image: "/images/rice.png" },
];

const industrialExports = [
  { name: "BUILDING SAFETY TOOLS", origin: "Export to Africa & South Africa", image: "/images/safety_tools.png" },
  { name: "HARDWARE MATERIAL", origin: "Export to Africa & South Africa", image: "/images/hardware_material.png" },
  { name: "MACHINERY", origin: "Export to Africa & South Africa", image: "/images/machinery.png" },
  { name: "TRUCKS, DUMPERS, JCB", origin: "Export to Africa & South Africa", image: "/images/trucks_dumpers.png" },
  { name: "RICE & SPICES", origin: "Export to Africa & South Africa", image: "/images/spices.png" },
  { name: "& MUCH MORE", origin: "Export to Africa & South Africa", image: "/images/machinery.png" },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Image src={product.image} alt={product.name} width={300} height={200} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        <div className="product-card-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div className="product-card-body">
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-origin">{product.origin}</div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section className="section" id="products">
      <div className="container">
        {/* Import Products */}
        <div className="section-header">
          <div className="section-title-decorated">
            <span className="section-title-line"></span>
            <h2 className="section-title">OUR PREMIUM PRODUCTS</h2>
            <span className="section-title-line"></span>
          </div>
        </div>
        {/* Agri Exports */}
        <div className="products-grid">
          {agriExports.map((p, i) => <ProductCard key={i} product={p} />)}
        </div>

        {/* Import Products */}
        <div className="products-grid">
          {importProducts.map((p, i) => <ProductCard key={i} product={p} />)}
        </div>

        {/* Industrial Exports */}
        <div className="products-grid">
          {industrialExports.map((p, i) => <ProductCard key={i} product={p} />)}
        </div>

        <button className="view-all-btn">
          VIEW ALL PRODUCTS
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}
