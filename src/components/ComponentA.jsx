import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ComponentA = () => {

    const {cart, setCart, comision} = useContext(CartContext)


    return (
        <div>
            variable comision {comision}
        </div>
    )
}

export default ComponentA