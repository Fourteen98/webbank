import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import TheNavBar from "./components/TheNavBar";
import Footer from "./components/Footer";
import BecomePartner from "./pages/BecomePartner";
import BrandPartners from "./pages/personal/BrandPartners";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <TheNavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/BecomePartner" element={<BecomePartner/>}/>
          <Route path="/pages/personal/BrandPartners" element={<BrandPartners />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
