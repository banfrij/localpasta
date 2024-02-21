import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Menu from './screens/Menu.jsx'
import Profile from './screens/Profile.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path ='/profile' element={<Profile/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);
