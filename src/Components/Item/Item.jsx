import React, { useState } from "react";
import "./Item.css";


export const Item = ({producto}) => {

    const [amount, setAmount] = useState(0)
    const count = (value) => {
    const result = amount + value
    if(result <= producto.stock && producto.stock >=0){
      setAmount(amount + value)
    }
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
            <button className="btn btn-primary">Comprar</button>
            <div className="btnDecInc">
            <button onClick={()=>count(+1)}>+</button>
            <span>{amount}</span>
            <button onClick={()=>count(-1)}>-</button>
            </div>
          </div>
        </div>
  )
}

export default Item