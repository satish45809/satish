import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ParticleBackground } from "./components/ParticleBackground";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative z-10">
      <ParticleBackground />

      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
