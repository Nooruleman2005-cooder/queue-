import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="products"><Products /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />

        {/* PRODUCT DETAILS */}
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;