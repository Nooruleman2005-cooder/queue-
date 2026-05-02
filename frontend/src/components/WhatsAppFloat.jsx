import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phone = "923333298578";

  const handleClick = () => {
    const message = "Hi, I am interested in your services";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
   
    window.location.href = url;
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppFloat;