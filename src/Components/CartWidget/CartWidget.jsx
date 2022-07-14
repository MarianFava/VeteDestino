import React from "react";
import carrito from "../../assets/carrito-de-compras.png";
import "./styles.css";


const CartWidget =() =>{

    return (
        <div>
        <button className="btnCarrito">
        <img src={carrito} className="imgCarrito" alt="" />
        <span className="contadorCarrito">0</span>
        </button>
        </div>
    )
}

export default CartWidget



