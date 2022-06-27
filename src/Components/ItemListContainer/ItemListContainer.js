import React, { useEffect,useState } from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import images from "../../assets";



const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos]= useState([])
    const productos = [
        {id:"101",nombre:"Mom Brunella",descripcion:"Jean Mom Basic LightBlue",img:"../../assets/mom-brunella.jpg",stock:"10"},
        {id:"102",nombre:"Mom Ana",descripcion:"Jean Mom Break Blue",img:"../../assets/mom-ana.jpg",stock:"10"},
        {id:"103",nombre:"Mom Glenda",descripcion:"Jean Mom Break LightBlue",img:"../../assets/mom-glenda.jpg",stock:"10"},
        {id:"104",nombre:"Mom Lara",descripcion:"Jean Mom ExtraBreak Blue",img:"../../assets/",stock:"10"}
    ]
    const getInfo = new Promise ((resolve, reject) =>{
        let condition = true
        setTimeout(()=>{
            if (condition) {
              resolve(productos)
            }else{
                reject("Compra cancelada")
            }

        },3000)
    })

    useEffect(()=>{
        getInfo
        .then((response)=>setListaProductos(response))
    },[])

console.log(listaProductos)
    return (
        <>
        <div className="landing">
            <span className="landingGreeting">{greeting}</span>
        </div>
        <ItemList listaProductos={listaProductos}/>
        </>
    )
}

export default ItemListContainer;