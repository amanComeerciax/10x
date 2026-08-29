"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const waNumber = "917984488660";
    const text = `Hello 10X International!%0A%0A*New Contact Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
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
      <button type="submit" style={{ background: "#0B3A26", color: "#FFFFFF", border: "none", padding: "14px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: "700", cursor: "pointer", transition: "all 0.3s" }}>
        Send WhatsApp Message
      </button>
    </form>
  );
}
