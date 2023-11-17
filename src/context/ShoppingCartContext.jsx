import { createContext, useState } from "react";




export const CartContext = createContext(null)


export const ShoppingCartProvider =({
   children 
}) => {
// Espacio para crear estados, variables, funciones, etc
const [cart, setCart] = useState ([])


const comision= 60815



    return(
<CartContext.Provider value={{cart, setCart, comision}} >
    {children}


</CartContext.Provider>


    )
}

export default ShoppingCartProvider