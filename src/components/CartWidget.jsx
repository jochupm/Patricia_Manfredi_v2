// import { CartContext } from "../provider/CartProvider"
// import { useContext } from "react"
// import { Link } from "react-router-dom"
// // eslint-disable-next-line react/prop-types
// function CartWidget() {
//   const {CartItemAmount} = useContext(CartContext)

//   return (
//     <Link to={"/cart"}>
//       <div className="relative p-10">
//         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="pink" border="salmon" class="bi bi-cart-fill" viewBox="0 0 16 16" >
//   <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
// </svg>
//         <span className="absolute p-0.5 top-0 right-2 rounded-full bg-red-400 text-white">
//           {CartItemAmount()}
//         </span>
//       </div>
//     </Link>
//   )
// }

// export default CartWidget


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

