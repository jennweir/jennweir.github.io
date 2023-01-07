import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/index';
import theme from './components/NavBar/index';
import Home from './pages/index';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
  
function App() {

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/blog/" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}
  
export default App;