// import { useContext, useState } from "react"
// import { InsertNewBuy } from "../services/firebaseConfig"
// import { CartContext } from "../provider/CartProvider"

// const Payment = () => {
//   const {ClearCart, GetTotalPriceCart} = useContext(CartContext)
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [orderID, setOrderID] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const data = {
//       name,
//       email,
//       total: GetTotalPriceCart()
//     }

//     await InsertNewBuy(data).then(idOrder => {
//       setOrderID(idOrder)
//       ClearCart()
//     })
//   }
//   return (
//     <>
//     {orderID === null ?
//       <div className="items-center w-full p-12 h-max">
//         <h1 className="self-center mb-12 text-center">Order Form</h1>
//         <form action="" onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full gap-4">
//           <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="p-2 border border-orange-400 rounded"/>
//           <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="p-2 border border-orange-400 rounded"/>

//           <button type="submit" className="w-32 bg-orange-400 rounded">Submit Order</button>
//         </form>
        
        
//       </div>
//       : <p className="self-center my-24 text-5xl text-center just">Your order ID is {orderID}</p> 
//     }
//     </>
//   )
// }

// export default Payment


import React, { useContext, useState } from "react";
import { InsertNewBuy } from "../services/firebaseConfig";
import { CartContext } from "../provider/CartProvider";

const Payment = () => {
  const { ClearCart, GetTotalPriceCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderID, setOrderID] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError(null);
    }

    // Validación de teléfono
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    } else {
      setPhoneError(null);
    }

    const data = {
      name,
      email,
      phone,
      total: GetTotalPriceCart(),
    };

    await InsertNewBuy(data).then((idOrder) => {
      setOrderID(idOrder);
      ClearCart();
    });
  };

  return (
    <>
      {orderID === null ? (
        <div className="container mt-5">
          <h1 className="mb-4 text-center">Order Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                required
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="mb-3">
              <input
                type="tel"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                required
              />
              {phoneError && <div className="invalid-feedback">{phoneError}</div>}
            </div>
            <button type="submit" class="btn btn-info">
              Submit Order
            </button>
          </form>
        </div>
      ) : (
        <p className="mt-5 text-5xl text-center">
          Your order ID is: <b> {orderID}</b>
        </p>
      )}
    </>
  );
};

export default Payment;
