import React from "react";


  export default function About() {
    export default function Contact() {
      export default function Navbar() {
        export default function Projects() {
          export default function Skills() {
            export default function Testimonials() {
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
            }
          }
        }
      }
    }
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