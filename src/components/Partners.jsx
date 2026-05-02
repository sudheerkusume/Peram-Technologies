import React from 'react';
import './Partners.css';
import partner from '../assets/partner.webp';
import partner1 from '../assets/partner1.webp';
import partner2 from '../assets/partner2.webp';
import partner3 from '../assets/partner3.webp';

const partners = [
  { name: 'Partner 1', logo: partner },
  { name: 'Partner 2', logo: partner1 },
  { name: 'Partner 3', logo: partner2 },
  { name: 'Partner 4', logo: partner3 }
];

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <p className="partners-subtitle">OUR TRUSTED PARTNERS</p>
        <h2 className="partners-title">Securing Excellence for Leading Organizations</h2>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.name}>
              <img
                className="partner-logo"
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
