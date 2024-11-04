import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../provider/CartProvider";
import { ItemQuantitySelector } from "./ItemQuantitySelector";

const MerceriaDetail = ({ id, description, price, Imagen, quantityInCart }) => {
  const [quantity, setQuantity] = useState(quantityInCart || 0);
  const { AddItemToCart } = useContext(CartContext);

  const handleQuantityIncrease = () => {
    const result = quantity + 1;
    if (result <= stock) {
      setQuantity(result);
    }
  };

  const handleQuantityDecrease = () => {
    const result = quantity - 1;
    if (result >= 0) {
      setQuantity(result);
    }
  };

  const SendItemToCart = () => AddItemToCart({ id, description, price, Imagen }, quantity);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={Imagen} alt="Imagen" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="lead">{description}</p>
          <p><b>Price:</b> ${price}</p>

          <ItemQuantitySelector
            increase={handleQuantityIncrease}
            decrease={handleQuantityDecrease}
            quantity={quantity}
          />

          <p className="mt-3"><b>Total Price:</b> ${price * quantity}</p>

          <Link
            to={'/cart'}
            onClick={SendItemToCart}
            className="btn btn-primary"
          >
            <b>Add to Cart</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MerceriaDetail;

