import React, { useState } from "react";

function ItemCount({ initial, stock, onAdd}) {
    const [value, setValue] = useState(initial);

    const incrementarContador = () => {
        value < stock ? setValue(value + 1) : alert("Fuera de Stock");
        };

    const decrementarContador = () => {
        value > initial ? setValue(value - 1) : alert("No podés agregar menos de 1 producto");
        };
    return (
        <>
        <button className="btnAddChart" onClick={()=> onAdd(value)}>Agregar al carrito</button>
        <button className="btnIncDec" onClick={incrementarContador}>+</button>
        <span>{value}</span>
        <button className="btnIncDec" onClick={decrementarContador}>-</button>
        </>
    )
}
export default ItemCount;






