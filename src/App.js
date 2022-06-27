import React from "react";
import Header from "./Components/Header/Header";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";



const App = () =>{
  return(
    <>
    <Header/>
    <ItemListContainer greeting="Bienvenidos a Vete Destino Indumentaria"/>
    <ItemCount/>
    </>
  )
}

export default App

