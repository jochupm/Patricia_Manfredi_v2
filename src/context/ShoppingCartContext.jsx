import { createContext, useState,useEffect } from "react";




export const CartContext = createContext(null)


export const ShoppingCartProvider =({
   children 
}) => {
// Espacio para crear estados, variables, funciones, etc
const [cart, setCart] = useState ([])
const [badge, setBadge] = useState (0)


const agregarAlCarrito= (curso, cantidad)=>{
if (cart.includes({...curso, cantidad})){
    alert(`${cantidad} curso of ${curso.name}added to your cart`)
    curso.cantidad=+cantidad;}
else {
    curso.cantidad= cantidad;
    setCart(prevState => [...prevState,{...curso, cantidad}])
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