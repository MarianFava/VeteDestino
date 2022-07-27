import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();

    return (
        <div className="ItemCart">
            <img src={product.img} alt={product.nombre} />
            <div>
                <p>Título: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unitario:$ {product.precio}</p>
                <p>Subtotal:$ {product.quantity * product.precio} </p>
                <button className="btnNav" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>

        </div>
    )
}

export default ItemCart;