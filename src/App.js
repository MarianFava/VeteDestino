import React from "react";
import Header from "./Components/Header/Header";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route,} from "react-router-dom";


const App = () =>{
  return(
    <BrowserRouter>
    <Header/>
    <ItemListContainer greeting="Bienvenidos a Vete Destino Indumentaria"/>
    <ItemDetailContainer/>
    </BrowserRouter>
  )
}

export default App

