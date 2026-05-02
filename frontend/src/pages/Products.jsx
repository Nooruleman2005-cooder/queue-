import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();


  const filtered =
    category === "all"
      ? data
      : data.filter((p) => p.type === category);

  return (
    <section className="products-page">

      {/* SIDEBAR FILTER */}
      <div className="sidebar">
        <h2>Products</h2>

        <button onClick={() => setCategory("all")}>All Products</button>
        <button onClick={() => setCategory("basic")}>Basic</button>
        <button onClick={() => setCategory("mid")}>Mid Range</button>
        <button onClick={() => setCategory("premium")}>Premium</button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="product-grid">

        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div className="product-card" key={p.id}>

              {/* IMAGE */}
              <img src={p.img} alt={p.name} />

              {/* NAME */}
              <h4>{p.name}</h4>

              {/* DESCRIPTION */}
              <p>High quality queue solution for modern businesses.</p>

              {/* BUTTON */}
              <button
                className="product-btn"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                View Details
              </button>

            </div>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>No Product Found 😢</h3>
        )}

      </div>
    </section>
  );
};

export default Products;