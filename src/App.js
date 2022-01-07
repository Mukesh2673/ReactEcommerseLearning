import React from 'react';
import { Provider } from 'react-redux';
import store from './component/Redux/cake/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/LoginAuthentication/Login'
import Register from './component/LoginAuthentication/Register'
import Images from './component/images'
import Counter from './component/counter';
function App() {
  return (
  <Provider store={store}>  
  <Routes>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/img" element={<Images/>}/>
   <Route path="/counter" element={<Counter/>}/>
  </Routes>
  </Provider>
   );
}

export default App;