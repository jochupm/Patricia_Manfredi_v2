import { useEffect, useState} from 'react'
import {collection, getDocs,getFirestore} from 'firebase/firestore'
// similar a item list container 
const Collection = () => {

    const [cursos, setCurso]= useState([])
console.log(cursos)
    useEffect(()=>{
const db= getFirestore()

const cursosCollection= collection(db, "cursos")

getDocs(cursosCollection).then((snapshot)=>{
    const docs = snapshot.docs.map((doc)=>doc.data())
    setProductos(docs)
})
    },[])



    return (
        <div>
            {
                cursos.map((p)=>(
                    <div>
                        <h1>Product: {c.name}</h1>
                        <h4>Category: {c.category}</h4>
                        <h4>Price: ${c.price}</h4>
                        <p>Description: {c.description}</p>

                    </div>
                ))
            }
        </div>
    )
}

export default Collection