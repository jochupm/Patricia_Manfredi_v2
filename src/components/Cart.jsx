import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../provider/CartProvider';
import { EmptyCart } from './EmptyCart';
import { AiFillDelete } from 'react-icons/ai';

export const Cart = () => {
  const { cart, RemoveItemFromCart, CartItemAmount, GetTotalPriceCart, UpdateCartItem } = useContext(CartContext);

  const deleteItemHandler = (id) => RemoveItemFromCart(id);

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );

  const updateQuantityHandler = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  useEffect(() => {
    // Actualizar cantidades en el carrito cuando cambian las cantidades
    cart.forEach((item) => {
      if (quantities[item.id] !== item.quantity) {
        UpdateCartItem(item.id, quantities[item.id]);
      }
    });
  }, [quantities, cart, UpdateCartItem]);

  return CartItemAmount() !== 0 ? (
    <div className="container mt-5">
      {cart.map((item) => (
        <div key={item.id} className="row mb-3">
          <div className="col-md-3">
            <img src={item.Imagen} alt="Imagen" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <Link to={`/item/${item.id}`}>
              <p className="mb-1"><b>{item.price}</b></p>
            </Link>
            <p className="mb-0">{item.description}</p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
            <div className="d-flex align-items-center">
              <span className="mr-2 font-weight-bold">Quantity:</span>
              <button
                className="btn btn-secondary btn-sm mr-2"
                onClick={() => updateQuantityHandler(item.id, Math.max(1, quantities[item.id] - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={quantities[item.id]}
                onChange={(e) => updateQuantityHandler(item.id, parseInt(e.target.value, 10))}
                min="1"
                className="form-control text-center"
              />
              <button
                className="btn btn-secondary btn-sm ml-2"
                onClick={() => updateQuantityHandler(item.id, quantities[item.id] + 1)}
              >
                +
              </button>
            </div>
            <p className="mb-1"><b>Total:</b> ${item.price * quantities[item.id]}</p>
            <button onClick={() => deleteItemHandler(item.id)} className="btn btn-danger">
              <AiFillDelete />
            </button>
          </div>
        </div>
      ))}
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <div className="alert alert-info">
            <h2 className="mb-0">Total amount: ${GetTotalPriceCart()}</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <Link className="btn btn-warning btn-lg mr-3" to={`/payment`}>
          Continue to Checkout
        </Link>
        <Link className="btn btn-primary btn-lg" to={`/category`}>
          Continue Shopping
        </Link>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};



// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../provider/CartProvider';
// import { EmptyCart } from './EmptyCart';
// import { AiFillDelete } from 'react-icons/ai';

// export const Cart = () => {
//   const { cart, RemoveItemFromCart, CartItemAmount, GetTotalPriceCart } = useContext(CartContext);

//   const deleteItemHandler = (id) => RemoveItemFromCart(id);

//   const [quantities, setQuantities] = useState(
//     cart.reduce((acc, item) => {
//       acc[item.id] = item.quantity;
//       return acc;
//     }, {})
//   );

//   const updateQuantityHandler = (id, quantity) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [id]: quantity,
//     }));
//   };

//   return CartItemAmount() !== 0 ? (
//     <div className="container mt-5">
//       {cart.map((item) => (
//         <div key={item.id} className="row mb-3">
//           <div className="col-md-3">
//             <img src={item.Imagen} alt="Imagen" className="img-fluid" />
//           </div>
//           <div className="col-md-6">
//             <Link to={`/item/${item.id}`}>
//               <p className="mb-1"><b>{item.name}</b></p>
//             </Link>
//             <p className="mb-0">{item.description}</p>
//           </div>
//           <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
//             <div className="d-flex align-items-center">
//               <span className="mr-2 font-weight-bold">Quantity:</span>
//               <button
//                 className="btn btn-secondary btn-sm mr-2"
//                 onClick={() => updateQuantityHandler(item.id, Math.max(1, quantities[item.id] - 1))}
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 value={quantities[item.id]}
//                 onChange={(e) => updateQuantityHandler(item.id, parseInt(e.target.value, 10))}
//                 min="1"
//                 className="form-control text-center"
//               />
//               <button
//                 className="btn btn-secondary btn-sm ml-2"
//                 onClick={() => updateQuantityHandler(item.id, quantities[item.id] + 1)}
//               >
//                 +
//               </button>
//             </div>
//             <p className="mb-1"><b>Total:</b> ${item.price * quantities[item.id]}</p>
//             <button onClick={() => deleteItemHandler(item.id)} className="btn btn-danger">
//               <AiFillDelete />
//             </button>
//           </div>
//         </div>
//       ))}
//       <div className="row justify-content-center mb-3">
//         <div className="col-md-6">
//           <div className="alert alert-info">
//             <h2 className="mb-0">Total amount: ${GetTotalPriceCart()}</h2>
//           </div>
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         <Link className="btn btn-warning btn-lg" to={`/payment`}>
//           Continue to Checkout
//         </Link>
//       </div>
//     </div>
//   ) : (
//     <EmptyCart />
//   );
// };

