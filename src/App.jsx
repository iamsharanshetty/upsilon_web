import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <TechStack />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
