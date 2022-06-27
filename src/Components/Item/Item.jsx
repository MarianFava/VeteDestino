import React from "react";
import "./Item.css";


export const Item = ({producto}) => {
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
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
  )
}

export default Item