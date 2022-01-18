import React from 'react';
import { Provider } from 'react-redux';
//import store from './component/Redux/store'
import store from './component/ERedux/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './component/LoginAuthentication/Login'
import Register from './component/LoginAuthentication/Register'
import Images from './component/images'

import Predux  from './component/predux';
import ProductDetail from './component/productdetails';
import CartProductdetails from './component/CartProductdetails';
import UserDetails from './component/UserDetails';
import Emptybasketpage from './component/Emptybasketpage';
function App() {
  return (
  <Provider store={store}>  
  <Routes>
    <Route path="/cart" element={<CartProductdetails/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/img" element={<Images/>}/>
   <Route path="/predux" element={<Predux/>}/>
   <Route path="/product/:productId" element={<ProductDetail/>}/>
   <Route path="/userdetails" element={<UserDetails/>}/>
   <Route path="/Emptybasketpage" element={<Emptybasketpage />}/>
  </Routes>
  </Provider>
   );
}

export default App;