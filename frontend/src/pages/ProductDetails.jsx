import React from "react";
import { FaArrowLeft, FaStar, FaCheckCircle, FaWhatsapp, FaPhone } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const phoneNumber = "923001234567"; // 🔥 apna number daalo (92 + number)

  const products = [
    { id: 1, name: "Basic Queue System", type: "basic", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500" },
    { id: 2, name: "Mid Range Queue System", type: "mid", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500" },
    { id: 3, name: "Premium Queue System", type: "premium", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500" },
    { id: 4, name: "Smart Buzzer System", type: "basic", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500" },
    { id: 5, name: "Analytics Dashboard", type: "premium", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500" },
  ];

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="details-page">

      <div className="details-card">

        <div className="details-img">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="details-content">

          <h1>{product.name}</h1>
          <span className="badge">{product.type}</span>

          <p>
            Powerful and scalable queue management system designed for modern businesses.
          </p>

          <ul className="features">
            <li><FaCheckCircle /> Real-time system</li>
            <li><FaCheckCircle /> Cloud dashboard</li>
            <li><FaCheckCircle /> Easy setup</li>
            <li><FaCheckCircle /> 24/7 support</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;