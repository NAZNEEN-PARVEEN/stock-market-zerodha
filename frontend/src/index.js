import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from './landing page/home/HomePage';
import Signup from "./landing page/signup/Signup";
// import Login from "./components/Login";
import AboutPage from "./landing page/about/AboutPage";
import ProductPage from "./landing page/product/ProductPage.js";
import PricingPage from "./landing page/pricing/PricingPage";
import SupportPage from "./landing page/support/SupportPage";
import NotFound from "./landing page/NotFound";
import Navbar from  "./landing page/Navbar";
import Footer from  "./landing page/Footer";
import Login from "./landing page/login/Login.js";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Navbar/>
    <Routes>
     <Route path="/" element={<HomePage/>} />
     <Route path="/signup"element={<Signup/>}/>
     <Route path="/login"element={<Login/>}/>
    <Route path="/about"element={<AboutPage/>}/>
    <Route path="/product"element={<ProductPage/>}/>
     <Route path="/pricing"element={<PricingPage/>}/> 
     <Route path="/support"element={<SupportPage/>}/>
          <Route path="*"element={<NotFound/>}/>
    </Routes>
    <Footer/>

  </BrowserRouter>
);
