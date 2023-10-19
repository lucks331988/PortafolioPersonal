import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './componets/about/About';
import Contact from './componets/contact/Contact';
import Home from './componets/home/Home';
import Portafolio from './componets/portafolio/Portafolio';
import NavBar from './componets/NavBar/NavBar';
import ParticlesComponent from './componets/ParticlesComponent';

function App() {
  return (
    <div className="App">
      <ParticlesComponent/>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
