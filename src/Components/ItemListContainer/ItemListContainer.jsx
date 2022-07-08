import React, { useEffect,useState } from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import { getInfo } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos]= useState([])
    const [loading, setLoading]= useState(true)

    const {categoryId}= useParams();

    useEffect(()=>{
        setLoading(true);
        getInfo
        .then((response)=>setListaProductos(response))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[categoryId]);

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