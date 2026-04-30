import React, { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.type === category);

  return (
    <section className="products-page">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Products</h2>

        <button onClick={() => setCategory("all")}>All Products</button>
        <button onClick={() => setCategory("basic")}>Basic</button>
        <button onClick={() => setCategory("mid")}>Mid Range</button>
        <button onClick={() => setCategory("premium")}>Premium</button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="product-grid">
        {filtered.map((p) => (
          <div className="product-card" key={p.id}>

            {/* IMAGE */}
            <img src={p.img} alt={p.name} />

            {/* CONTENT */}
            <h4>{p.name}</h4>
            <p>High quality queue solution for modern businesses.</p>

            {/* BUTTON */}
            <button
              className="product-btn"
              onClick={() => setSelectedProduct(p)} >
              View Details
            </button>

          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>

          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <img src={selectedProduct.img} alt={selectedProduct.name} />

            <h2>{selectedProduct.name}</h2>
            <p>
              This is a detailed description of {selectedProduct.name}.
              It provides smart queue management solutions for businesses.
            </p>

            <button onClick={() => setSelectedProduct(null)}>Close</button>

          </div>
        </div>
      )}

    </section>
  );
};

export default Products;