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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, subject, message } = formData;

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
    } catch (err) {
      console.error("Email send error:", err);
    }

    const waNumber = "917984488660";
    const text = `Hello 10X International!%0A%0A*New Contact Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {submitted && (
        <div style={{ padding: "12px 16px", background: "#DEF7EC", color: "#03543F", borderRadius: "8px", fontSize: "14px", fontWeight: "600", marginBottom: "16px" }}>
          ✓ Inquiry sent to Email & WhatsApp! We will get back to you shortly.
        </div>
      )}
      <button 
        type="submit" 
        disabled={isSubmitting}
        style={{ 
          background: "#0F2537", 
          color: "#FFFFFF", 
          border: "none", 
          padding: "14px 28px", 
          borderRadius: "8px", 
          fontSize: "14px", 
          fontWeight: "700", 
          cursor: "pointer", 
          transition: "all 0.3s",
          opacity: isSubmitting ? 0.7 : 1
        }}
      >
        {isSubmitting ? "Sending..." : "Send Email & WhatsApp Inquiry"}
      </button>
    </form>
  );
}
