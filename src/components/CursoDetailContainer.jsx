import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { GetDetailCurso } from "/Users/josep/Web_Development/Patricia_Manfredi/src/services/firebaseConfig";
import { CartContext } from "../provider/CartProvider";
import CursoDetail from "./CursoDetail";

const CursoDetailContainer = () => {
  const { id } = useParams();
  const { cart } = useContext(CartContext);

  const [curso, setCurso] = useState();
  const [quantityInCart, setQuantityInCart] = useState(0);

  useEffect(() => {
    GetDetailCurso(id).then((data) =>{
      console.log("Data fetched:", data); // Esto mostrará el resultado en la consola
      data.length !== 0 ? setCurso({ id: id, ...data }) : setCurso(data)
  });

    // Obtiene la cantidad del producto en el carrito
    const indexItem = cart.findIndex((curso) => curso.id === id);
    if (indexItem !== -1) {
      setQuantityInCart(cart[indexItem].quantity);
    } else {
      setQuantityInCart(0);
    }
  }, [id, cart]);

  return (
    <div className='flex justify-center my-10'>
      <CursoDetail {...curso} quantityInCart={quantityInCart} />
    </div>
  );
};

export default CursoDetailContainer;