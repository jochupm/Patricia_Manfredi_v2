// import { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../provider/CartProvider';
// import { EmptyCart } from './EmptyCart';
// import { AiFillDelete } from 'react-icons/ai';

// export const Cart = () => {
//   const { cart, RemoveItemFromCart, CartItemAmount, GetTotalPriceCart, UpdateCartItem } = useContext(CartContext);

//   const deleteItemHandler = (id) => RemoveItemFromCart(id);

//   const [quantities, setQuantities] = useState(
//     cart.reduce((acc, curso) => {
//       acc[curso.id] = curso.quantity;
//       return acc;
//     }, {})
//   );

//   const updateQuantityHandler = (id, quantity) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [id]: quantity,
//     }));
//   };

//   useEffect(() => {
//     // Actualizar cantidades en el carrito cuando cambian las cantidades
//     cart.forEach((curso) => {
//       if (quantities[curso.id] !== curso.quantity) {
//         UpdateCartItem(curso.id, quantities[curso.id]);
//       }
//     });
//   }, [quantities, cart, UpdateCartItem]);

//   return CartItemAmount() !== 0 ? (
//     <div className="container mt-5">
//       {cart.map((curso) => (
//         <div key={curso.id} className="row mb-3">
//           <div className="col-md-3">
//             <img src={curso.Imagen} alt="Imagen" className="img-fluid" />
//           </div>
//           <div className="col-md-6">
//             <Link to={`/cursos/${curso.id}`}>
//               <p className="mb-1"><b>{curso.name}</b></p>
//             </Link>
//             <p className="mb-0">{curso.description}</p>
//           </div>
//           <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
//             <div className="d-flex align-items-center">
//               <span className="mr-2 font-weight-bold">Quantity:</span>
//               <button
//                 className="btn btn-secondary btn-sm mr-2"
//                 onClick={() => updateQuantityHandler(curso.id, Math.max(1, quantities[curso.id] - 1))}
//               >
//                 -
//               </button>
//               <input
//                 type="number"
//                 value={quantities[curso.id]}
//                 onChange={(e) => updateQuantityHandler(curso.id, parseInt(e.target.value, 10))}
//                 min="1"
//                 className="form-control text-center"
//               />
//               <button
//                 className="btn btn-secondary btn-sm ml-2"
//                 onClick={() => updateQuantityHandler(curso.id, quantities[curso.id] + 1)}
//               >
//                 +
//               </button>
//             </div>
//             <p className="mb-1"><b>Total:</b> ${curso.price * quantities[curso.id]}</p>
//             <button onClick={() => deleteItemHandler(curso.id)} className="btn btn-danger">
//               <AiFillDelete />
//             </button>
//           </div>
//         </div>
//       ))}
//       <div className="row justify-content-center mb-3">
//         <div className="col-md-6">
//           <div className="alert alert-info">
//             <h2 className="mb-0">Total: ${GetTotalPriceCart()}</h2>
//           </div>
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         <Link className="btn btn-warning btn-lg mr-3" to={`/payment`}>
//           Finalizar compra
//         </Link>
//         <Link className="btn btn-primary btn-lg" to={`/category`}>
//           Continuar comprando
//         </Link>
//       </div>
//     </div>
//   ) : (
//     <EmptyCart />
//   );
// };

import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../provider/CartProvider';
import { EmptyCart } from './EmptyCart';
import { AiFillDelete } from 'react-icons/ai';

export const Cart = () => {
  const { cart, RemoveItemFromCart, CartItemAmount, GetTotalPriceCart, AddItemToCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, curso) => {
      acc[curso.id] = curso.quantity;
      return acc;
    }, {})
  );

  const updateQuantityHandler = (id, quantity) => {
    if (quantity < 1 || isNaN(quantity)) return; // Validar que no sea menor a 1 o NaN
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  useEffect(() => {
    // Actualizar el carrito en el contexto cuando cambien las cantidades
    cart.forEach((curso) => {
      const newQuantity = quantities[curso.id];
      if (newQuantity !== curso.quantity) {
        AddItemToCart(curso, newQuantity - curso.quantity); // Ajusta la cantidad en el contexto
      }
    });
  }, [quantities, cart, AddItemToCart]);

  return CartItemAmount() !== 0 ? (
    <div className="container mt-5">
      {cart.map((curso) => (
        <div key={curso.id} className="row mb-3">
          <div className="col-md-3">
            <img src={curso.Imagen} alt="Imagen" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <Link to={`/cursos/${curso.id}`}>
              <p className="mb-1"><b>{curso.name}</b></p>
            </Link>
            <p className="mb-0">{curso.description}</p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
            <div className="d-flex align-items-center">
              <span className="mr-2 font-weight-bold">Quantity:</span>
              <button
                className="btn btn-secondary btn-sm mr-2"
                onClick={() => updateQuantityHandler(curso.id, Math.max(1, quantities[curso.id] - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={quantities[curso.id]}
                onChange={(e) => updateQuantityHandler(curso.id, parseInt(e.target.value, 10))}
                min="1"
                className="form-control text-center"
              />
              <button
                className="btn btn-secondary btn-sm ml-2"
                onClick={() => updateQuantityHandler(curso.id, quantities[curso.id] + 1)}
              >
                +
              </button>
            </div>
            <p className="mb-1"><b>Total:</b> ${curso.price * quantities[curso.id]}</p>
            <button onClick={() => RemoveItemFromCart(curso.id)} className="btn btn-danger">
              <AiFillDelete />
            </button>
          </div>
        </div>
      ))}
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <div className="alert alert-info">
            <h2 className="mb-0">Total: ${GetTotalPriceCart()}</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <Link className="btn btn-warning btn-lg mr-3" to={`/payment`}>
          Finalizar compra
        </Link>
        <Link className="btn btn-primary btn-lg" to={`/category`}>
          Continuar comprando
        </Link>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};


