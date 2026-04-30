import { useState , useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products'

function App() {

   useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    const move = (e) => {
      const { clientX, clientY } = e;

      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      follower.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
   <>
         <div className="cursor"></div>
      <div className="cursor-follower"></div>
   <Header/>
    <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="products"><Products /></section>
      <section id="contact"><Contact /></section>

   <Footer/>
   </>
  )
}

export default App
