import React from "react";

export default function App() {
  return "App";
}
// src/App.js

import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}