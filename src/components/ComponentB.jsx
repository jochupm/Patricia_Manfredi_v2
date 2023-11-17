import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ComponentB = () => {

    const {cart, setCart, comision} = useContext(CartContext)

console.log(cart)
    return (
        <div>
            variable comision {comision}
        </div>
    )
}

export default ComponentB