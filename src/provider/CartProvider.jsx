import { createContext, useState } from 'react'

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const CartItemAmount = () => cart.length

    const AddItemToCart = (curso, quantity) => {
      const indexItem = IsInCart(curso.id)
      if(indexItem !== -1) {
        let updateCart = [...cart] 
        updateCart[indexItem].quantity += quantity
        setCart(updateCart)
      } else {
        setCart((prev) => [...prev, {...curso, quantity: quantity}])
      }
    }

    const GetTotalPriceCart = () => cart.reduce((accumulated, {price, quantity}) => accumulated + price * quantity, 0)

    const RemoveItemFromCart = (id) => {
      const updateCart = cart.filter((curso) => curso.id !== id)
      setCart(updateCart)
    }

    const ClearCart = () => setCart([])

    const IsInCart = (id) => cart.findIndex(curso => curso.id === id)

    const UpdateCartItem = (cursoId, newQuantity) => {
      setCart((prevCart) =>
        prevCart.map((curso) =>
          curso.id === cursoId ? { ...curso, quantity: newQuantity } : curso
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