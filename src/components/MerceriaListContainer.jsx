import React, { useState, useEffect } from 'react';
import { GetProducts } from '../services/firebaseConfig';
import Loader from './Loader';
import Merceria from './Merceria'; // Asegúrate de que el nombre sea correcto

function MerceriaListContainer() {
  const [merceria, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await GetProducts(); // No filtramos por categoría
        setProduct(data); // Corrige aquí a setProduct
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {merceria.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <Merceria {...item} /> {/* Asegúrate de que Merceria esté importado correctamente */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MerceriaListContainer;

