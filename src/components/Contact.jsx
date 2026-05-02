import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const trustStats = ['10+ Years', '500+ Projects', '24/7 Support', 'Certified Team'];

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const subject = formData.get('subject')?.toString().trim() || 'Service Enquiry';
    const message = formData.get('message')?.toString().trim() || '';

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailToLink = `mailto:infoperamtech7@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailToLink;
    setStatusMessage('Opening your email app to send the message...');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h4 className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>Get In Touch</h4>
          <h2 className="section-title" style={{color: 'white'}}>Ready to Secure Your Future?</h2>
          <p className="contact-desc">
            Get in touch with our security experts for a free consultation and a customized quote for your requirements.
          </p>

          <div className="trust-row">
            {trustStats.map((stat) => (
              <span key={stat} className="trust-chip">{stat}</span>
            ))}
          </div>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon"><FaPhone /></div>
              <div>
                <h4>Call Us</h4>
                <p>+91 9121957508, +91 9949511553</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h4>Email Us</h4>
                <p>infoperamtech7@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Our Location</h4>
                <p>2nd Floor, 15-21-73/1, Balaji Nagar Main Rd, Kukatpally, Hyderabad, Telangana 500072</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" className="form-control" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" className="form-control" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" className="form-control" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" className="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            {statusMessage && <p className="form-status">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
