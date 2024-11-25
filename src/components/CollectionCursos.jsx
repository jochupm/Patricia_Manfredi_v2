import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const CollectionCursos = () => {
  const [cursos, setCurso] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "cursos");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCurso(docs);
      })
      .catch((error) => {
        console.error("Error fetching cursos:", error);
      });
  }, []);

  return (
    <div>
      {cursos.map((curso) => (
        <div key={curso.id}>
          <h4>Category: {curso.category}</h4>
          <h4>Price: ${curso.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default CollectionCursos;