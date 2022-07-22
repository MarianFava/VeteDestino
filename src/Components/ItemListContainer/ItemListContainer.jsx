import React, { useEffect,useState } from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos]= useState([])
    const [loading, setLoading]= useState(true)
    const {categoryId}= useParams();

    useEffect(()=>{

        const productsCollection = collection(db, "ItemCollection");
        if (categoryId){
            const qDoc = query(productsCollection, where("categoryId", "==", categoryId));
            getDocs(qDoc)
            .then(result => {
                const lista = result.docs.map(product => ({id: product.id,...product.data() }))
                setListaProductos(lista);
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
        }else{
            getDocs(productsCollection)
            .then(result => {
                const lista = result.docs.map(product => ({id: product.id,...product.data() }))
                setListaProductos(lista);
            })
            .catch((error)=> console.error(error))
            .finally(()=> setLoading(false))
        }
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