import React, { useEffect,useState } from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import { getInfo } from "../../mocks/fakeApi";


const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos]= useState([])
    const [loading, setLoading]= useState(true)


    useEffect(()=>{
        getInfo
        .then((response)=>setListaProductos(response))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[])

console.log(listaProductos)
    return (
        <>
        <div className="landing">
            <span className="landingGreeting">{greeting}</span>
        </div>
        {loading ? <p>Cargando...</p>: <ItemList listaProductos={listaProductos}/>}
        </>
    )
}

export default ItemListContainer;