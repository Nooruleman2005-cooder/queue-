import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {

  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const data = [
    { id: 1, name: "Basic Queue System", type: "basic", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500" },
    { id: 2, name: "Mid Range Queue System", type: "mid", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500" },
    { id: 3, name: "Premium Queue System", type: "premium", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500" },
  ];

  const filtered =
    category === "all"
      ? data
      : data.filter((p) => p.type === category);

  return (
    <section className="products-page">

      <div className="sidebar">
        <h2>Products</h2>

        <button onClick={() => setCategory("all")}>All Products</button>
        <button onClick={() => setCategory("basic")}>Basic</button>
        <button onClick={() => setCategory("mid")}>Mid Range</button>
        <button onClick={() => setCategory("premium")}>Premium</button>
      </div>

      <div className="product-grid">

        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div className="product-card" key={p.id}>

              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>High quality queue solution for modern businesses.</p>

              <button
                className="product-btn"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                View Details
              </button>

            </div>
          ))
        ) : (
          <h3>No Product Found 😢</h3>
        )}

      </div>
    </section>
  );
};

export default Products;