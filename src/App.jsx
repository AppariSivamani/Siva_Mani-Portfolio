import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';


function App() {

  return (
    <div>
      <Home />
      <Hero />
      

      <div id="projects">
        <Projects />
      </div>

      <div id='skills'>
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>


    </div>
  )
}

export default App
