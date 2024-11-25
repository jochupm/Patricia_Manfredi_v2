import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GetDetailCurso } from "../services/firebaseConfig"; // Asegúrate de que GetDetailCurso está correctamente implementado
import { CartContext } from "../provider/CartProvider";
import CursosDetail from "./CursosDetail";

const CursosDetailContainer = () => {
  const { id } = useParams();
  const { cart } = useContext(CartContext);

  const [curso, setCurso] = useState(null);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        setLoading(true);
        const data = await GetDetailCurso(id);
        if (data) {
          setCurso({ id, ...data });
        } else {
          setCurso(null);
        }

        const indexItem = cart.findIndex((item) => item.id === id);
        setQuantityInCart(indexItem !== -1 ? cart[indexItem].quantity : 0);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurso();
  }, [id, cart]);

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (!curso) {
    return <p>No course found.</p>;
  }

  return (
    <div className="flex justify-center my-10">
      <CursosDetail {...curso} quantityInCart={quantityInCart} />
    </div>
  );
};

export default CursosDetailContainer;