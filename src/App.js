import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Gardening from './services/Gardening';
import Planting from './services/Planting';
import Pots from './services/Pots';
import IndoorPlants from './services/IndoorPlants';
import FlowerPlants from './services/FlowerPlants';


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/gardening" element={<Gardening />} />
            <Route path="/services/planting" element={<Planting />} />
            <Route path="/services/pots" element={<Pots />} />
            <Route path="/services/indoor-plants" element={<IndoorPlants />} />
            <Route path="/services/flower-plants" element={<FlowerPlants />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
