

import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { GetDetailProduct } from '../services/firebaseConfig';
import { CartContext } from '../provider/CartProvider';
import MerceriaDetail from './MerceriaDetail'

const MerceriaDetailContainer = () => {
  const { id } = useParams();
  const { cart } = useContext(CartContext);

  const [merceria, setProduct] = useState();
  const [quantityInCart, setQuantityInCart] = useState(0);

  useEffect(() => {
    // Obtiene el producto detallado
    GetDetailProduct(id).then((data) =>
      data.length !== 0 ? setProduct({ id: id, ...data }) : setProduct(data)
    );

    // Obtiene la cantidad del producto en el carrito
    const indexItem = cart.findIndex((item) => item.id === id);
    if (indexItem !== -1) {
      setQuantityInCart(cart[indexItem].quantity);
    } else {
      setQuantityInCart(0);
    }
  }, [id, cart]);

  return (
    <div className='flex justify-center my-10'>
      <MerceriaDetail {...merceria} quantityInCart={quantityInCart} />
    </div>
  );
};

export default MerceriaDetailContainer;