import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/LoginAuthentication/Login'
import Register from './component/LoginAuthentication/Register'
function App() {
  return (
  <Routes>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
  </Routes>
   );
}

export default App;