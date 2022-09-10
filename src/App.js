import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import TheNavBar from "./components/TheNavBar";
import Footer from "./components/Footer";
import BecomePartner from "./pages/BecomePartner";
import BrandPartners from "./pages/personal/BrandPartners";
import DepositProducts from "./pages/personal/DepositProducts";
import BusinessBrandPartners from "./pages/business/BusinessBrandPartners";
import AssetFinance from "./pages/business/AssetFinance";
import Commercial from "./pages/business/Commercial";
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
          <Route path="/pages/personal/DepositProducts" element={<DepositProducts />}/>
          <Route path="/pages/business/BusinessBrandPartners" element={<BusinessBrandPartners />}/>
          <Route path="/pages/business/AssetFinance" element={<AssetFinance />}/>
          <Route path="/pages/business/Commercial" element={<Commercial />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
