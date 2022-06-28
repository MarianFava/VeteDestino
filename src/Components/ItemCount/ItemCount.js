import React, { useState } from "react";


const ItemCount = ({stock}) =>{
    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value
        if(result <=stock){
            setAmount(amount+value)
        }
    }
    return{
        count, amount
    }

}



export default ItemCount