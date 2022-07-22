import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";


const ItemList =({listaProductos , categoryId}) =>{
    console.log(listaProductos);
    return (
        <div>
            <h3>{categoryId}</h3>
            <div className="cardsContainer">
            {listaProductos.map((producto)=><Item key={producto.id} producto={producto}/>)}
            </div>
        </div>
    )
}


export default ItemList