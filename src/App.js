import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import TheNavBar from "./components/TheNavBar";
import Footer from "./components/Footer";
import BecomePartner from "./pages/BecomePartner";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <TheNavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/BecomePartner" element={<BecomePartner/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
