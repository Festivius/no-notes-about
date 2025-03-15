import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';
import Notebook from './components/Notebook.jsx'
import Description from './components/Description.jsx';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    <Description/>
    <Notebook/>
    </>
  
  );
}

export default App;