import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetFilteredProducts, GetProducts } from '../services/firebaseConfig';
import Item from './Item';
import Loader from './Loader';

function ItemListContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data;
        if (category !== undefined) {
          data = await GetFilteredProducts(category);
        } else {
          data = await GetProducts();
        }
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

