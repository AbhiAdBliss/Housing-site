import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FloatingEnquiry from "./components/FloatingEnquiry"; // ← IMPORT THIS

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />

      {/* 🔥 Always visible floating buttons */}
      <FloatingEnquiry />
    </>
  );
}

export default App;
