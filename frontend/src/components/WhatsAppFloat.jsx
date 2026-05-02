import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phone = "923333298758";

  const handleClick = () => {
    const message = "Hi, I am interested in your services";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppFloat;