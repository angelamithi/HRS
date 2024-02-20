import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer'
import Header from './components/Header'
import SideNav from './components/SideNav';
function App() {
  const [isRegisterFormActive, setIsRegisterFormActive] = useState(true);
  

  const toggleForm = () => {
    setIsRegisterFormActive(!isRegisterFormActive);
  };

  const redirectToLogin = () => {
    console.log("Redirecting to login")
    
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Header />} />
          <Route element={<SideNav />} />
          <Route element={<Footer />} />
          <Route path="/home" element={<Home />} />
          <Route 
            path="/login"
            element={<Login toggleForm={toggleForm} isRegisterFormActive={isRegisterFormActive} />}
          />
          <Route
            path="/register"
            element={<Register redirectToLogin={redirectToLogin} isRegisterFormActive={isRegisterFormActive} toggleForm={toggleForm} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
