import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Widgets from './Pages/Widgets';
import Tables from './Pages/Tables';
import Forms from './Pages/Forms';
import Charts from './Pages/Charts';
import Slideshow from './Pages/Slideshow';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/widget' element={<Widgets/>}/>
                <Route path='/table' element={<Tables/>}/>
                <Route path='/form' element={<Forms/>}/>
                <Route path='/chart' element={<Charts/>}/>
                <Route path='/slideshow' element={<Slideshow/>}/>
  </Routes>
</Router>
);
