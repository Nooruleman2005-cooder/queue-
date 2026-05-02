import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);


    const products = [
        {
            id: 1,
            name: "Basic Queue System",
            type: "basic",
            img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500"
        },
        {
            id: 2,
            name: "Mid Range Queue System",
            type: "mid",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500"
        },
        {
            id: 3,
            name: "Premium Queue System",
            type: "premium",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500"
        },
        {
            id: 4,
            name: "Smart Buzzer System",
            type: "basic",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
        },
        {
            id: 5,
            name: "Analytics Dashboard",
            type: "premium",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
        },
    ];

    const handleSend = () => {
        const message = `Hi, I am interested in ${product.name}`;
        const phone = "923104534427"; // apna WhatsApp number (country code ke sath)

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    const product = products.find((p) => p.id === Number(id));

    if (!product) return <h2>Product not found</h2>;

    return (
        <div className="details-page">

            <button className="back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>

            <div className="details-card">

                <div className="details-img">
                    <img src={product.img} alt={product.name} />
                </div>

                <div className="details-content">
                    <h1>{product.name}</h1>
                    <span className="badge">{product.type}</span>

                    <p>
                        This is a detailed page for {product.name}.
                        Yahan tum full description, features, pricing, waghera add kar sakte ho.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;