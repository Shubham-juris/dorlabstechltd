import React from "react";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import RouterPage from "./Pages/RouterPage";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <RouterPage/>
      <Footer />
    </div>
  );
}

export default App;
