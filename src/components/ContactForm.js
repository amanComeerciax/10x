"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedType, setSubmittedType] = useState(null); // 'email' | 'whatsapp' | null

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, subject, message } = formData;

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmittedType('email');
      setTimeout(() => setSubmittedType(null), 5000);
    } catch (err) {
      console.error("Email send error:", err);
    }
    
    setIsSubmitting(false);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const waNumber = "917984488660";
    const text = `Hello 10X International!%0A%0A*New Contact Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    
    setSubmittedType('whatsapp');
    setTimeout(() => setSubmittedType(null), 5000);
  };

  if (submittedType) {
    return (
      <div style={{
        background: '#FFF', padding: '60px 20px', borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center',
        border: '1px solid #E2E8F0', animation: 'scaleUp 0.4s ease-out forwards'
      }}>
        <style>{`
          @keyframes scaleUp {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes drawCheck {
            0% { stroke-dasharray: 0, 100; }
            100% { stroke-dasharray: 100, 0; }
          }
        `}</style>
        <div style={{ 
          width: '90px', height: '90px', borderRadius: '50%', 
          background: submittedType === 'whatsapp' ? '#dcf8c6' : '#e0f2fe',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px'
        }}>
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" 
               stroke={submittedType === 'whatsapp' ? '#25D366' : '#0284c7'} 
               strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
               style={{ strokeDasharray: '100', strokeDashoffset: '0', animation: 'drawCheck 0.7s ease-out forwards' }}>
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0F172A', marginBottom: '16px' }}>Thank You!</h3>
        <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto' }}>
          Your message has been successfully sent via <strong style={{color: submittedType === 'whatsapp' ? '#25D366' : '#0284c7'}}>{submittedType === 'whatsapp' ? 'WhatsApp' : 'Email'}</strong>.<br/>Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "20px" }}>
        <div>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Your Name *</label>
          <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "14px", outline: "none" }} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Email Address</label>
          <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "14px", outline: "none" }} />
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Subject *</label>
        <input type="text" name="subject" required placeholder="How can we help you?" value={formData.subject} onChange={handleChange} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "14px", outline: "none" }} />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#475569", marginBottom: "8px" }}>Message *</label>
        <textarea name="message" rows="5" required placeholder="Write your message here..." value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "14px", outline: "none", resize: "vertical" }}></textarea>
      </div>

      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
        <button 
          type="button" 
          onClick={handleEmailSubmit}
          disabled={isSubmitting}
          style={{ 
            flex: 1,
            minWidth: "200px",
            background: "#0F2537", 
            color: "#FFFFFF", 
            border: "none", 
            padding: "14px 22px", 
            borderRadius: "30px", 
            fontSize: "14px", 
            fontWeight: "700", 
            cursor: "pointer", 
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            boxShadow: "0 4px 14px rgba(15, 37, 55, 0.2)",
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          {isSubmitting ? "Sending..." : "Send Email Inquiry"}
        </button>

        <button 
          type="button" 
          onClick={handleWhatsAppSubmit}
          style={{ 
            flex: 1,
            minWidth: "200px",
            background: "#25D366", 
            color: "#FFFFFF", 
            border: "none", 
            padding: "14px 22px", 
            borderRadius: "30px", 
            fontSize: "14px", 
            fontWeight: "700", 
            cursor: "pointer", 
            transition: "all 0.3s ease",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)"
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.143 4.174 4.286-1.123z"/>
          </svg>
          Send WhatsApp Inquiry
        </button>
      </div>
    </form>
  );
}
