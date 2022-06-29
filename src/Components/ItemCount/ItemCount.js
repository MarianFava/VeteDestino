import React, { useState } from "react";

function ItemCount({ initial, stock, onAdd}){
    const [value, setValue] = useState(initial);

    const incrementarContador = () => {
        value < stock
        ? setValue (value + 1)
        : setValue (value)
        }

    const decrementarContador = () => {
        value > 0
        ? setValue(value - 1)
        : setValue(value)
        }
    return (
        <>
        <button onClick={incrementarContador}>+</button>
        <span>{value}</span>
        <button onClick={decrementarContador}>-</button>
        <button onClick={()=> onAdd(value)}>Agregar al carrito</button>
        </>
    )
}
export default ItemCount;






