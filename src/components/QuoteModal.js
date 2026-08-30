"use client";
import React, { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedType, setSubmittedType] = useState(null); // 'email' | 'whatsapp' | null
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSuccessAnimation = (type) => {
    setSubmittedType(type);
    setTimeout(() => {
      setSubmittedType(null);
      onClose();
    }, 3000);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, product, message } = formData;
    if (!name || !phone || !product) {
      setErrorMsg("Please fill out all required fields (*).");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, product, message }),
      });
      setFormData({ name: '', phone: '', email: '', product: '', message: '' });
      handleSuccessAnimation('email');
    } catch (err) {
      console.error("Email send error:", err);
    }
    setIsSubmitting(false);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, product, message } = formData;
    if (!name || !phone || !product) {
      setErrorMsg("Please fill out all required fields (*).");
      return;
    }

    setErrorMsg("");
    const waNumber = "917984488660";
    const text = `Hello 10X International!%0A%0A*New Inquiry / Quote Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Product of Interest:* ${product}%0A*Message:* ${message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    handleSuccessAnimation('whatsapp');
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 10000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.3s ease-out forwards'
    }}>
      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawCheck {
          0% { stroke-dasharray: 0, 100; }
          100% { stroke-dasharray: 100, 0; }
        }
      `}</style>

      <div style={{
        background: '#FFF', width: '100%', maxWidth: '500px',
        borderRadius: '16px', padding: '30px', position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        animation: 'scaleUp 0.3s ease-out forwards',
        overflow: 'hidden'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: '4px', display: 'flex', zIndex: 10
          }}
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submittedType ? (
          <div style={{ textAlign: 'center', padding: '40px 10px', animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', 
              background: submittedType === 'whatsapp' ? '#dcf8c6' : '#e0f2fe',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" 
                   stroke={submittedType === 'whatsapp' ? '#25D366' : '#0284c7'} 
                   strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                   style={{ strokeDasharray: '100', strokeDashoffset: '0', animation: 'drawCheck 0.6s ease-out forwards' }}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>Thank You!</h3>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.6' }}>
              Your inquiry has been successfully sent via <strong style={{color: submittedType === 'whatsapp' ? '#25D366' : '#0284c7'}}>{submittedType === 'whatsapp' ? 'WhatsApp' : 'Email'}</strong>.<br/>Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>Get a Quote</h3>
            <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>Fill out the form below to send an inquiry via Email or WhatsApp.</p>

            <form>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Your Name *</label>
                <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }} />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Product of Interest *</label>
                <input type="text" name="product" required placeholder="e.g., Spices, Kids Wear, Machinery" value={formData.product} onChange={handleChange} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }} />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Your Requirements</label>
                <textarea name="message" rows="3" placeholder="Tell us more about what you need..." value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              {errorMsg && (
                <div style={{ padding: "10px 14px", background: "#FEE2E2", color: "#B91C1C", borderRadius: "8px", fontSize: "13px", fontWeight: "600", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {errorMsg}
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  style={{ 
                    flex: 1, 
                    minWidth: '180px',
                    background: '#0F2537', 
                    color: '#FFFFFF', 
                    border: 'none', 
                    padding: '12px 18px', 
                    borderRadius: '30px', 
                    fontSize: '13.5px', 
                    fontWeight: '700', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {isSubmitting ? "Sending..." : "Send Email"}
                </button>

                <button 
                  type="button" 
                  onClick={handleWhatsAppSubmit}
                  style={{ 
                    flex: 1, 
                    minWidth: '180px',
                    background: '#25D366', 
                    color: '#FFFFFF', 
                    border: 'none', 
                    padding: '12px 18px', 
                    borderRadius: '30px', 
                    fontSize: '13.5px', 
                    fontWeight: '700', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.286-1.123z"/>
                  </svg>
                  Send WhatsApp
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
