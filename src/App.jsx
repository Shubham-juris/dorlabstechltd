import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Expertise from "./components/Home/Expertise";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import AffordableServices from "./components/Home/AffordableServices";
import Marquee from "./components/Home/Marquee";
import SubscribeForm from "./components/Home/SubscribeForm";
import Navbar from "./components/Home/Navbar";
import LocationMap from "./components/Home/LocationMap";

import ServicePage from "./Pages/Servic"; // import from src folder

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
        {/* You can add more routes here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
