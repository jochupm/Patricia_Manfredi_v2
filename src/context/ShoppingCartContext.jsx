import { createContext, useState,useEffect } from "react";




export const CartContext = createContext(null)


export const ShoppingCartProvider =({
   children 
}) => {
// Espacio para crear estados, variables, funciones, etc
const [cart, setCart] = useState ([])
const [badge, setBadge] = useState (0)


const agregarAlCarrito= (item, cantidad)=>{
if (cart.includes({...item, cantidad})){
    alert(`${cantidad} items of ${item.name}added to your cart`)
    item.cantidad=+cantidad;}
else {
    item.cantidad= cantidad;
    setCart(prevState => [...prevState,{...item, cantidad}])
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