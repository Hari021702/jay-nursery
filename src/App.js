import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer /> {/* ✅ Moved outside of Routes */}
      </div>
    </Router>
  );
}

export default App;
