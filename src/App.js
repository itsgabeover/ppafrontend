import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar, Home, GetStarted, LearnMore } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/learn" element={<LearnMore />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
