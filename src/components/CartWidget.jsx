

import React, { useContext } from "react";
import { CartContext } from "../provider/CartProvider";
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { CartItemAmount } = useContext(CartContext); // Obtener la cantidad total de ítems

  return (
    <Link to={"/cart"}>
    <div className="relative p-10">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge bg-primary">{CartItemAmount()}</span>
    </div>
    </Link>
  );
};

export default CartWidget;

