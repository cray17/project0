import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const handleScroll = (event) => {
    const { deltaX } = event;

    if (deltaX > 0) {
      setScrollDirection('right');
    } else if (deltaX < 0) {
      setScrollDirection('left');
    } else {
      setScrollDirection('none');
    }
  };

  return (
    <div className={`App ${scrollDirection}`}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <CurrentPageSetter setCurrentPage={setCurrentPage} />
    </div>
  );
}

function CurrentPageSetter({ setCurrentPage }) {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const path = pathname.split('/')[1];
    setCurrentPage(path || 'home');
  }, [location, setCurrentPage]);

  return null;
}

export default App;

