// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { ItemDetail } from './ItemDetail'
// import { GetDetailProduct } from '../services/firebaseConfig'
// const ItemDetailContainer = () => {
//   const {id} = useParams()

//   const [product, setProduct] = useState()

//   useEffect(() => {
//     GetDetailProduct(id).then(data => data.length !== 0 ? setProduct({id: id, ...data}) : setProduct(data))
//   }, [id])
  
//   return (
//     <div className='flex justify-center my-10'>
//       <ItemDetail {...product}/>
//     </div>
      
//   )
// }

// export default ItemDetailContainer



import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { GetDetailMolde } from '../services/firebaseConfig';
import { CartContext } from '../provider/CartProvider';
import MoldetecaDetail from './MoldetecaDetail'



const MoldetecaDetailContainer = () => {
  const { id } = useParams();
  const { cart } = useContext(CartContext);

  const [moldeteca, setMolde] = useState();
  const [quantityInCart, setQuantityInCart] = useState(0);

  useEffect(() => {
    // Obtiene el producto detallado
    GetDetailMolde(id).then((data) =>
      data.length !== 0 ? setMolde({ id: id, ...data }) : setMolde(data)
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
      <MoldetecaDetail {...moldeteca} quantityInCart={quantityInCart} />
    </div>
  );
};

export default MoldetecaDetailContainer;