"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">10X</div>
          <div className="logo-text">
            <span>INTERNATIONAL</span>
            <span>IMPORT | EXPORT</span>
          </div>
        </Link>

        <div className="nav-links" style={mobileOpen ? {
          display: 'flex', flexDirection: 'column', position: 'absolute',
          top: '100%', left: 0, right: 0, background: '#fff', padding: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)', gap: '16px', zIndex: 999
        } : undefined}>
          <Link href="/" className={pathname === '/' ? "active" : ""} onClick={closeMenu}>HOME</Link>
          <Link href="/about" className={pathname === '/about' ? "active" : ""} onClick={closeMenu}>ABOUT US</Link>
          <Link href="/services" className={pathname === '/services' ? "active" : ""} onClick={closeMenu}>SERVICES</Link>
          <Link href="/quality" className={pathname === '/quality' ? "active" : ""} onClick={closeMenu}>QUALITY</Link>
          <Link href="/contact" className={pathname === '/contact' ? "active" : ""} onClick={closeMenu}>CONTACT US</Link>
          <button 
            className="nav-cta" 
            onClick={() => { closeMenu(); setIsModalOpen(true); }}
            style={{ fontFamily: 'inherit', cursor: 'pointer', border: 'none' }}
          >
            GET A QUOTE
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
