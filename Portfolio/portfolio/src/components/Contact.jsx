import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! This message form can be connected to EmailJS or a backend service.");
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          required
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
        <button type="submit" className="btn primary-btn">Send Message</button>
      </form>
    </section>
  );
}