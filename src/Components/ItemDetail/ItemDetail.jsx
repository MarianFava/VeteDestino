import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ItemProducto}) => {
  return (
    <div className="container" style={{width: "18rem"}}>
    <div className="card-container">
      <div className="header">
        <img className="imgCard" src={ItemProducto.img} alt=""></img>
        <h2>{ItemProducto.nombre}</h2>
        <h3>{ItemProducto.precio}</h3>
      </div>
      <div className="description">
        <p>{ItemProducto.descripcion}</p>
        <h4>{ItemProducto.talles}</h4>
        <button className="btnAddChart">Agregar al carrito</button>
        <ItemCount stock={ItemProducto.stock} initial={1} />
      </div>
    </div>

  </div>
  )
}

export default ItemDetail;