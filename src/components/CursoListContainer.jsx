import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetFilteredCurso, GetCurso } from '../services/firebaseConfig';
import Cursos from './Cursos'
import Loader from './Loader';

function CursoListContainer() {
  const { category } = useParams();
  const [cursos, setCurso] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data;
        if (category !== undefined) {
          data = await GetFilteredCurso(category);
        } else {
          data = await GetCurso();
        }
        setCurso(data);
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
        {cursos.map((item) => (
          <div key={cursos.id} className="col-md-4 mb-4">
            <Cursos {...cursos} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CursoListContainer;

