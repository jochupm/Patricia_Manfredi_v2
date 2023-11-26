import { createContext, useState } from 'react'

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const CartItemAmount = () => cart.length

    const AddItemToCart = (item, quantity) => {
      const indexItem = IsInCart(item.id)
      if(indexItem !== -1) {
        let updateCart = [...cart] 
        updateCart[indexItem].quantity += quantity
        setCart(updateCart)
      } else {
        setCart((prev) => [...prev, {...item, quantity: quantity}])
      }
    }

    const GetTotalPriceCart = () => cart.reduce((accumulated, {price, quantity}) => accumulated + price * quantity, 0)

    const RemoveItemFromCart = (id) => {
      const updateCart = cart.filter((item) => item.id !== id)
      setCart(updateCart)
    }

    const ClearCart = () => setCart([])

    const IsInCart = (id) => cart.findIndex(item => item.id === id)

    const UpdateCartItem = (itemId, newQuantity) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    return (
    <CartContext.Provider value={
      {cart, 
      setCart, 
      CartItemAmount, 
      AddItemToCart, 
      RemoveItemFromCart, 
      ClearCart,
      GetTotalPriceCart,
      UpdateCartItem,
      }
    } >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider