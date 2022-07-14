import React, { useState, useContext } from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (productos, quantity) => {
    if (isInCart(productos.id)) {
      setCart(cart.map(product => {
        return product.id === productos.id ? {...product, quantity: product.quantity + quantity } : product
      }));
    }else{
      setCart([...cart, {...productos, quantity}]);
    }
  }
  console.log("carrito", cart);


       const clearCart = () => setCart([]);

       const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;

       const removeProduct = (id) => setCart(cart.filter(productos => productos.id !== id ));

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct
    }

    }>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;