import { useEffect, useState} from 'react'
import {collection, getDocs,getFirestore} from 'firebase/firestore'
// similar a item list container 
const Collection = () => {

    const [productos, setProductos]= useState([])
console.log(productos)
    useEffect(()=>{
const db= getFirestore()

const itemsCollection= collection(db, "products")

getDocs(itemsCollection).then((snapshot)=>{
    const docs = snapshot.docs.map((doc)=>doc.data())
    setProductos(docs)
})
    },[])



    return (
        <div>
            {
                productos.map((p)=>(
                    <div>
                        <h1>Product: {p.name}</h1>
                        <h4>Category: {p.category}</h4>
                        <h4>Color: {p.color}</h4>
                        <h4>Price: ${p.price}</h4>
                        <p>Description: {p.description}</p>

                    </div>
                ))
            }
        </div>
    )
}

export default Collection