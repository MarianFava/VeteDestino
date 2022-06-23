import React from "react";
import CartWidget from "./Components/CartWidget";
import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";



const App = () =>{
  return(
    <>
    <Header/>
    <CartWidget/>
    <ItemListContainer greeting="Bienvenidos a Vete Destino Indumentaria"/>
    </>
  )
}

export default App

