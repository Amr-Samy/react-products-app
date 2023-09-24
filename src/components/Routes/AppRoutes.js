import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from './../../screens/NotFound/NotFoundPage';
import Home from './../../screens/home/Home';
import ProductDetails from '../../screens/ProductDetails/ProductDetails';
import Favourites from './../../screens/Favourites/Favourites';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
