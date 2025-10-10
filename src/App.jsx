import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Expertise from "./components/Home/Expertise";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import AffordableServices from "./components/Home/AffordableServices";
import Marquee from "./components/Home/Marquee";
import SubscribeForm from "./components/Home/SubscribeForm";
import Navbar from "./components/Home/Navbar";
import LocationMap from "./components/Home/LocationMap";

import ServicePage from "./Pages/Servic"; // import from src folder
import AboutPage from "./Pages/AboutPage";

function Home() {
  return (
    <>
      {/* The homepage content */}
      <Hero />
      <About />
      <Expertise />
      <AffordableServices />
      <Contact />
      <LocationMap />
      <Marquee />
      <SubscribeForm />
    </>
  );
}

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        {/* You can add more routes here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
