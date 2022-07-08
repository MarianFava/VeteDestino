import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";

import {BrowserRouter, Routes, Route,} from "react-router-dom";

const App = () =>{
  return(
    <BrowserRouter>
    <Navbar/>
    <Footer/>
    <Routes>
     <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Vete Destino Indumentaria"/>}/>
     <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a Vete Destino Indumentaria"/>}/>
     <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
     <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

