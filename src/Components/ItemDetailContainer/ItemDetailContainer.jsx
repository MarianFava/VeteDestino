import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProd} from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail.jsx"

const ItemDetailContainer = () =>{
    //llamado a fakeApi
    const [ItemProducto, setItemProducto]= useState([])
    const [loading, setLoading]= useState(true)
    const { productId } = useParams();

    useEffect(()=>{
        setLoading(true);
        getProd(productId)
        .then((response)=>{
            setItemProducto(response);
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[productId])


return (
    <>
    {loading ? <p>Cargando...</p>: <ItemDetail ItemProducto={ItemProducto}/>}
    </>
)
}

export default ItemDetailContainer