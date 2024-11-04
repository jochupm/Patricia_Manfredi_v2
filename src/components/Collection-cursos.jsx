import { useEffect, useState} from 'react'
import {collection, getDocs,getFirestore} from 'firebase/firestore'
// similar a item list container 
const Collection = () => {

    const [moldeteca, setMolde]= useState([])
console.log(moldeteca)
    useEffect(()=>{
const db= getFirestore()

const itemsCollection= collection(db, "moldeteca")

getDocs(itemsCollection).then((snapshot)=>{
    const docs = snapshot.docs.map((doc)=>doc.data())
    setMolde(docs)
})
    },[])



    return (
        <div>
            {
                moldeteca.map((m)=>(
                    <div>
                        <h4>Category: {m.category}</h4>
                        <h4>Descripcion: {m.description}</h4>
                        <h4>Price: ${m.price}</h4>

                    </div>
                ))
            }
        </div>
    )
}

export default Collection