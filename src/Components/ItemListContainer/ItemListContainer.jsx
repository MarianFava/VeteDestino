import React, { useEffect,useState } from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import { getProdsPorCategoria } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query} from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos]= useState([])
    const [loading, setLoading]= useState(true)

    const {categoryId}= useParams();


    useEffect(()=>{


        setLoading(true);
        getProdsPorCategoria(categoryId)
        .then((response)=>setListaProductos(response))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[categoryId]);

    return (
        <>
        <div className="landing">
            <span className="landingGreeting">{greeting}</span>
        </div>
        {loading ? <p>Cargando...</p>: <ItemList listaProductos={listaProductos} categoryId={categoryId}/>}
        </>
    )
}

export default ItemListContainer;