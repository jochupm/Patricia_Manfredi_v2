import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetFilteredMolde, GetMolde } from '../services/firebaseConfig';
import Moldeteca from './Moldeteca';
import Loader from './Loader';

function MoldetecaListContainer() {
  const { category } = useParams();
  const [moldeteca, setMolde] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data;
        if (category !== undefined) {
          data = await GetFilteredMolde(category);
        } else {
          data = await GetMolde();
        }
        setMolde(data);
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
        {moldeteca.map((item) => (
          <div key={moldeteca.id} className="col-md-4 mb-4">
            <Moldeteca {...moldeteca} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoldetecaListContainer;

