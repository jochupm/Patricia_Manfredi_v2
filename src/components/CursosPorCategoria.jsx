import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetFilteredCursos } from '../services/firebaseConfig';
import {collection, getDocs,getFirestore} from 'firebase/firestore'
import Curso from './Curso';

const CursosPorCategoria = () => {

    const [cursos, setCurso]= useState([])
console.log(cursos)
    useEffect(()=>{
const db= getFirestore()

const itemsCollection= collection(db, "cursos")

getDocs(itemsCollection).then((snapshot)=>{
    const docs = snapshot.docs.map((doc)=>doc.data())
    setCurso(docs)
})
    },[])



    return (
        <div>
            {
                Curso.map((p)=>(
                    <div>
                        <h1>Product: {c.name}</h1>
                        <h4>Category: {c.category}</h4>
                        <h4>Color: {p.color}</h4>
                        <h4>Price: ${p.price}</h4>
                        <p>Description: {p.description}</p>

                    </div>
                ))
            }
        </div>
    )
}




// const CursosPorCategoria = () => {
//   const { category } = useParams();
//   const [cursos, setCurso] = useState([]);

//   useEffect(() => {
//     GetFilteredCursos(category).then((data) => {
//       setCurso(data);
//     });
//   }, [category]);

//   return (
//     <div>
//       <h2>Cursos en la categoría: {category}</h2>
//       <ul>
//         {cursos.map((curso) => (
//           <li key={curso.id}>{curso.nombre}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default CursosPorCategoria;