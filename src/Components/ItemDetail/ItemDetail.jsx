import React, {useState} from "react";
import { useCartContext } from "../../Context/CartContext";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({ItemProducto}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();


  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(ItemProducto, quantity);
  }

  return (
    <div className="container">
    <div className="card-container">
      <div className="header">
        <img className="imgCard" src={ItemProducto.img} alt={ItemProducto.nombre}></img>
        <h2>{ItemProducto.nombre}</h2>
        <h3>{ItemProducto.precio}</h3>
      </div>
      <div className="description">
        <p>{ItemProducto.descripcion}</p>
        <h4>{ItemProducto.talles}</h4>
        {
        goToCart
        ? <Link to="/cart" className="btnNav">Finalizar Compra</Link>
        : <ItemCount stock={ItemProducto.stock} initial={1} onAdd={onAdd}/>
        }
      </div>
    </div>

  </div>
  )
}

export default ItemDetail;