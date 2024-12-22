import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../provider/CartProvider";
import { ItemQuantitySelector } from "./ItemQuantitySelector";

const CursoDetail = ({ id, Imagen, category, name, price, description, quantityInCart }) => {
  const [quantity, setQuantity] = useState(quantityInCart || 0);
  const { AddItemToCart } = useContext(CartContext);

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const SendItemToCart = () =>
    AddItemToCart({ id, Imagen, category, name, price, description }, quantity);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={Imagen} alt="Imagen" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="lead">
            <b>Nombre:</b> {name}
          </p>
          <p>
            <b>Price:</b> ${price}
          </p>
          <p>
            <b>Descripcion:</b> {description}
          </p>

          <ItemQuantitySelector
            increase={handleQuantityIncrease}
            decrease={handleQuantityDecrease}
            quantity={quantity}
          />

          <p className="mt-3">
            <b>Total Price:</b> ${price * quantity}
          </p>

          <Link to={"/cart"} onClick={SendItemToCart} className="btn btn-primary">
            <b>Add to Cart</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CursoDetail;
