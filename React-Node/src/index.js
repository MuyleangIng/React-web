import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import Page from './Pages/Page';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/page' element={<Page/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<AboutUs/>}/>
  </Routes>
</Router>
);
