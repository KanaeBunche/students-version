// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // TODO: Implement dark mode toggle functionality
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header />
        
        {/* Step 1: Implement the DarkModeToggle without passing the toggleDarkMode function */}
        <DarkModeToggle />
        
        <Routes>
          {/* Step 2: Ensure these routes are correctly set up */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Step 3: Add additional routes if necessary */}
          {/* Example: <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
