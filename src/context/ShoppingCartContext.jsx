import { createContext, useState,useEffect } from "react";




export const CartContext = createContext(null)


export const ShoppingCartProvider =({
   children 
}) => {
// Espacio para crear estados, variables, funciones, etc
const [cart, setCart] = useState ([])
const [badge, setBadge] = useState (0)


const agregarAlCarrito= (curso, quantity)=>{
if (cart.includes({...curso, quantity})){
    alert(`${quantity} curso of ${curso.category}added to your cart`)
    curso.quantity=+quantity;}
else {
    curso.quantity= quantity;
    setCart(prevState => [...prevState,{...curso, quantity}])
}
console.log(cart)

}
    return(
<CartContext.Provider value={{cart, setCart, cadge, setBadge,agregarAlCarrito}} >
    {children}


</CartContext.Provider>


    )
}

export default ShoppingCartProvider