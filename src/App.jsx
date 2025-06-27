// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import SimpleNavbar from "./components/SimpleNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import InterestContact from "./components/InterestContact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 text-gray-900 font-sans scroll-smooth">
      <SimpleNavbar />

      <div className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <Navbar />
        <section id="about" className="print:border-b print:border-black ">
          <About />
        </section>
        <section id="education" className="print:border-b print:border-black">
          <Education />
        </section>
        <section id="experience" className="print:border-b print:border-black">
          <Experience />
        </section>
        <section id="skills" className="print:border-b print:border-black">
          <Skills />
        </section>
        <section id="softskills">
          <SoftSkills />
        </section>
        <section id="interest-contact">
          <InterestContact />
        </section>

        <a
          href="https://wa.me/6285720043130" // ganti dengan nomor WA kamu
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 z-50 print:hidden"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            className="w-12 h-12 shadow-lg rounded-full hover:scale-110 transition"
          />
        </a>

      </div>
      <Footer />
    </div>
  );
}

export default App;
