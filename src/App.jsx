import React from "react";
import "./App.css";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Expertise from "./components/Home/Expertise";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import AffordableServices from "./components/Home/AffordableServices";
import Map from "./components/Home/map";
import Marquee from "./components/Home/Marquee";
import SubscribeForm from "./components/Home/SubscribeForm";

function App() {
  return (
    <>
      <div className="font-sans">
        <Header />
        <Hero />
        <About />
        <Expertise />
        <AffordableServices />
        <Contact />
        <Map />
        <Marquee />
        <SubscribeForm />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
