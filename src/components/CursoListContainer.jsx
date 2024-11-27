import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetFilteredCursos, GetCursos } from "/Users/josep/Web_Development/Patricia_Manfredi/src/services/firebaseConfig";
import Curso from './Curso'
import Loader from './Loader';

function CursoListContainer() {
  const { category } = useParams();
  const [curso, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data;
        if (category !== undefined) {
          data = await GetFilteredCursos(category);
        } else {
          data = await GetCursos();
        }
        setCursos(data);
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
        {curso.map((curso) => (
          <div key={curso.id} className="col-md-4 mb-4">
            <Curso {...curso} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default CursoListContainer;

