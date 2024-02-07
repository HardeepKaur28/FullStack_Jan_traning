import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import Vote from './components/Vote';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
