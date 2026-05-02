import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "9121957508";
  // The 'wa.me' format expects the country code. 
  // Assuming +91 for India since the number is 10 digits and starts with 9, 
  // or maybe it's just '91' country code + '21957508'. 
  // Wait, let's just use the exact number they provided: 9121957508
  // If "9121957508" is the 10-digit number without country code, we typically need +91.
  // Actually, standard link is https://wa.me/9121957508 (where 91 could be India code or part of the number). Let's use what they provided literally or prepend +91 if they meant a 10 digit number starting with 912...
  // Let's assume the exact string they gave is the WhatsApp target.
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
