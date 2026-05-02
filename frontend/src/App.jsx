import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import WhatsAppFloat from "./components/WhatsAppFloat";
import { useRef, useState } from "react";
import { useEffect } from "react";

function App() {

  const [search, setSearch] = useState("");
  const productsRef = useRef(null);
  const [displaySearch, setDisplaySearch] = useState("");

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
  ];

const filteredData = productsData.filter((item) =>
  item.name.toLowerCase().includes(displaySearch.toLowerCase())
);

  useEffect(() => {
  const timer = setTimeout(() => {
    setDisplaySearch(search);
  }, 1000); 

  return () => clearTimeout(timer);
}, [search]);

  return (
    <Router>
      <Header setSearch={setSearch} search={search} productsRef={productsRef} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>

              <section id="products" ref={productsRef}>
                <Products data={filteredData} />
              </section>

              <section id="contact"><Contact /></section>
            </>
          }
        />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <WhatsAppFloat />
      <Footer />
    </Router>
  );
}

export default App;