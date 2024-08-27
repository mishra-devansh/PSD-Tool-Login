import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'; // Import Home directly
import Signin from './Signin';
import Login from './Login';
import Creator from './Creator';
import Viewer from './Viewer';
import Approver from './Approver';
import UserManagement from './UserManagement'; // Import the UserManagement component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Home />} /> {/* Use Home directly */}
        <Route path='/creator' element={<Creator />} />
        <Route path='/viewer' element={<Viewer />} />
        <Route path='/approver' element={<Approver />} />
        <Route path='/usermanagement' element={<UserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
