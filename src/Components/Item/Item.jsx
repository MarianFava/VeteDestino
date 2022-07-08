import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";


export const Item = ({producto}) => {

    const onAdd = (value) => {
      alert (`Agregando ${value} products`);
    }

  return (
    <div className="card" style={{width: "18rem"}}>
          <img
            src={producto.img}
            className="card-img-top"
            alt={producto.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <Link to={`/detail/${producto.id}`} className="btn btnNav">Ver detalles</Link>
            <div className="btnDecInc"></div>

            <ItemCount initial={1} stock={10} onAdd={onAdd}/>

          </div>
      </div>
  );
};

export default Item;
