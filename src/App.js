import React from 'react';
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import LoginAdmin from './components/admin/LoginAdmin';
import LoginStudent from './components/students/LoginStudent';


function App() {
  return (
      <div>
        
        {/* Main Content goes here */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/*' element={<LoginAdmin />} />
          <Route path='/student/*' element={<LoginStudent />} />
        </Routes>

      </div>
  );
}

export default App;
