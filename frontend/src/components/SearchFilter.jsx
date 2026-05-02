import React, { useState } from "react";

const productsData = [
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

const SearchFilter = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchFilter;