import React from "react";
import carrito from "../../assets/carrito-de-compras.png";
import "./styles.css";
import { useCartContext } from "../../Context/CartContext";


const CartWidget =() =>{
    const {totalProducts} = useCartContext();

    return (

        <div className="cartDiv">
        <button className="btnCarrito">
        <img src={carrito} className="imgCarrito" alt="" />
        <span className="contadorCarrito"> {totalProducts() || ""}</span>
        </button>
        </div>

    )
}

export default CartWidget



