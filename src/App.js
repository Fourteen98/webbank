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
import AboutWebBank from "./pages/about/AboutWebBank";
import Leadership from "./pages/about/Leadership";
import Working from "./pages/about/Working";
import ContactUs from "./pages/about/ContactUs";
import NewsRoom from "./pages/about/NewsRoom";
import FinancialStatementLink from "./pages/about/FinancialStatementLink";
import Privacy from "./pages/about/Privacy";
import BusinessAssociations from "./pages/about/BusinessAssociations";
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
          <Route path="/pages/about/AboutWebBank" element={<AboutWebBank />}/>
          <Route path="/pages/about/Leadership" element={<Leadership />}/>
          <Route path="/pages/about/Working" element={<Working />}/>
          <Route path="/pages/about/ContactUs" element={<ContactUs />}/>
          <Route path="/pages/about/NewsRoom" element={<NewsRoom />}/>
          <Route path="/pages/about/FinancialStatementLink" element={<FinancialStatementLink />}/>
          <Route path="/pages/about/Privacy" element={<Privacy />}/>
          <Route path="/pages/about/BusinessAssociations" element={<BusinessAssociations />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
