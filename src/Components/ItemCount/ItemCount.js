import React, { useState } from "react";

const ItemCount = () =>{

    const [sumar, setSumar] = useState(0)
    return (
        <div>
            <button onClick={()=>setSumar(sumar + 1)}>{sumar}</button>
        </div>
    )
}


export default ItemCount