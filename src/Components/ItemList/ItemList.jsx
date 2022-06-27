import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList =({listaProductos}) =>{

    return (
        <div>
            <h3>Lista de Productos</h3>
            <div className="cardsContainer">
            {listaProductos.map((producto)=><Item key={producto.id} producto={producto}/>)}
            </div>
        </div>
    )
}


export default ItemList