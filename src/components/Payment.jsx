

import React, { useContext, useState } from "react";
import { InsertNewBuy } from "../services/firebaseConfig";
import { CartContext } from "../provider/CartProvider";

const Payment = () => {
  const { ClearCart, GetTotalPriceCart, cart } = useContext(CartContext); // Incluye cart en el contexto
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderID, setOrderID] = useState(null);
  const [orderDate, setOrderDate] = useState(""); // Nueva variable para la fecha
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [orderCart, setOrderCart] = useState([]); // Copia del carrito para mostrar después de limpiar

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
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    } else {
      setPhoneError(null);
    }

    // Guardar copia del carrito antes de limpiar
    setOrderCart([...cart]);

    // Generar la fecha actual
    const currentDate = new Date().toISOString(); // Guardar en formato ISO

    // Preparar datos de la orden
    const data = {
      name,
      email,
      phone,
      total: GetTotalPriceCart(),
      items: cart, // Enviar los cursos al backend
      date: currentDate, // Incluir la fecha
    };

    // Enviar la orden a Firebase
    try {
      const idOrder = await InsertNewBuy(data);
      setOrderID(idOrder);
      setOrderDate(currentDate); // Guardar la fecha para mostrarla en la interfaz
      ClearCart(); // Limpiar el carrito después de confirmar la orden
    } catch (error) {
      console.error("Error submitting order:", error);
    }
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
                className={`form-control ${emailError ? "is-invalid" : ""}`}
                required
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="mb-3">
              <input
                type="tel"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                className={`form-control ${phoneError ? "is-invalid" : ""}`}
                required
              />
              {phoneError && <div className="invalid-feedback">{phoneError}</div>}
            </div>
            <button type="submit" className="btn btn-info">
              Submit Order
            </button>
          </form>
        </div>
      ) : (
        <div className="container mt-5 text-center">
          <h4>
            Tu número de orden es: <b>{orderID}</b>
          </h4>
          <p>Te vamos a mandar un mail para coordinar el pago.</p>
          <p>Gracias por tu pedido :)</p>
          <div className="mt-4">
            <h5>Fecha de la Orden: {new Date(orderDate).toLocaleString()}</h5> {/* Mostrar la fecha */}
            <h5>Resumen de tu pedido:</h5>
            <ul className="list-group">
              {orderCart && orderCart.length > 0 ? (
                <>
                  {orderCart.map((curso, index) => (
                    <li key={index} className="list-group-item">
                      <h4>Categoría: {curso.category || "Sin categoría"}</h4>
                      <h4>Curso: {curso.name || "Sin categoría"}</h4>
                      <h4>Precio: ${curso.price || "0.00"}</h4>
                      <h4>Cantidad: {curso.quantity || "0.00"}</h4>
                      <p>Descripción: {curso.description || "Sin descripción"}</p>
                    </li>
                  ))}
                  <li className="list-group-item text-end">
                    <h4>Total: ${GetTotalPriceCart()} </h4>
                  </li>
                </>
              ) : (
                <li className="list-group-item">No hay cursos en tu pedido.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;