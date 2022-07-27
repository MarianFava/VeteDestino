import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const [idVenta, setIdVenta] = useState("")

  const order = {
    cliente: {
      nombre: "María Perez",
      email: "mariaperez@gmail.com",
      telefono: "1134567890",
      direccion: "Rivadavia 2800"
    },
    items: cart.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio, quantity: product.quantity })),
    total: totalPrice(),
  }
  const handleClick = () => {
  const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
    .then((result) =>{
      setIdVenta(result.id)
    })
  }

  if (cart.length === 0) {

    return (
      <>
      <p>No hay productos en el carrito</p>
      <Link to= "/">Empezar a comprar</Link>
      </>
    );
  }

  return (
  <>
    {
    cart.map(product => <ItemCart key={product.id} product={product} />)
    }
    <p>
      Total: ${totalPrice()}
    </p>
    <button className="btnNav" onClick={handleClick}>Emitir orden</button>
  </>
  )
  }


export default Cart;