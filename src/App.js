import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState('none');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const handleScroll = (event) => {
    const { deltaY, deltaX } = event;

    if (deltaX > 0) {
      setScrollDirection('right');
    } else if (deltaX < 0) {
      setScrollDirection('left');
    } else {
      setScrollDirection('none');
    }
  };

  useEffect(() => {
    const { pathname } = location;
    const path = pathname.split('/')[1];
    setCurrentPage(path || 'home');
  }, [location]);

  return (
    <div className={`App ${scrollDirection}`}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

