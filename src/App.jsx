import styles from "./App.module.css";
import Certificate from "./Certificates/Certificate";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";

import { Navbar } from "./components/Navbar/Navbar";
import Projects from "./components/Projects/projects";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
}

export default App;
