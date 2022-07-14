import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import CartProvider from "./Context/CartContext";


const App = () =>{
  return(
    <>
    <BrowserRouter>
    <CartProvider>
     <Navbar/>
     <Routes>
      <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Vete Destino Indumentaria"/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a Vete Destino Indumentaria"/>}/>
      <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
    </CartProvider>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

