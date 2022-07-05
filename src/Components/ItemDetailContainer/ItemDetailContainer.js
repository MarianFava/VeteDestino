import React, {useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { getInfo} from "../../mocks/fakeApi";
import ItemDetail from "../ItemDetail/ItemDetail.jsx"

function ItemDetailContainer (){

    //llamado a fakeApi
    const [ItemProducto, setItemProducto]= useState([])
    const [loading, setLoading]= useState(true)
    //const {detalleId} = useParams()
    const detalleId = "101";


    useEffect(()=>{
        getInfo
        .then((response)=>setItemProducto(response.find(prod=> prod.id === detalleId)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[])

console.log(ItemProducto)
return (
    <>
    {loading ? <p>Cargando...</p>: <ItemDetail ItemProducto={ItemProducto}/>}
    </>
)
}

export default ItemDetailContainer