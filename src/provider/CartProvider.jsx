// import { createContext, useState } from 'react'

// export const CartContext = createContext({
//   cart: []
// })

// export const CartProvider = ({children}) => {
//     const [cart, setCart] = useState([])

//     const CartItemAmount = () => cart.length

//     const AddItemToCart = (curso, quantity) => {
//       const indexItem = IsInCart(curso.id)
//       if(indexItem !== -1) {
//         let updateCart = [...cart] 
//         updateCart[indexItem].quantity += quantity
//         setCart(updateCart)
//       } else {
//         setCart((prev) => [...prev, {...curso, quantity: quantity}])
//       }
//     }

//     const GetTotalPriceCart = () => cart.reduce((accumulated, {price, quantity}) => accumulated + price * quantity, 0)

//     const RemoveItemFromCart = (id) => {
//       const updateCart = cart.filter((curso) => curso.id !== id)
//       setCart(updateCart)
//     }

//     const ClearCart = () => setCart([])

//     const IsInCart = (id) => cart.findIndex(curso => curso.id === id)

//     const UpdateCartItem = (cursoId, newQuantity) => {
//       setCart((prevCart) =>
//         prevCart.map((curso) =>
//           curso.id === cursoId ? { ...curso, quantity: newQuantity } : curso
//         )
//       );
//     };

//     return (
//     <CartContext.Provider value={
//       {cart, 
//       setCart, 
//       CartItemAmount, 
//       AddItemToCart, 
//       RemoveItemFromCart, 
//       ClearCart,
//       GetTotalPriceCart,
//       UpdateCartItem,
//       }
//     } >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export default CartProvider

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Recuperar carrito desde sessionStorage al iniciar
  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar carrito en sessionStorage cada vez que cambie
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar un ítem al carrito
  const AddItemToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

    // Eliminar un ítem del carrito
    const RemoveItemFromCart = (id) => {
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    };

  // Limpiar el carrito
  const ClearCart = () => {
    setCart([]);
  };

  // Obtener el total de ítems en el carrito
  const CartItemAmount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener el precio total del carrito
  const GetTotalPriceCart = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        AddItemToCart,
        RemoveItemFromCart,
        ClearCart,
        CartItemAmount,
        GetTotalPriceCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider