import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc,  getDoc, collection} from "firebase/firestore";


const ItemDetailContainer = () =>{
    //llamado a fakeApi
    const [ItemProducto, setItemProducto]= useState([])
    const [loading, setLoading]= useState(true)
    const { productId } = useParams();

    useEffect(()=>{
       const productsCollection = collection(db, "ItemCollection");
       const refDoc= doc(productsCollection, productId)
       getDoc(refDoc).then(result => {
          setItemProducto(result.data())
       })
       .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    }, [productId]);

return (
    <>
    {loading ? <p>Cargando...</p>: <ItemDetail ItemProducto={ItemProducto}/>}
    </>
)
}

export default ItemDetailContainer;