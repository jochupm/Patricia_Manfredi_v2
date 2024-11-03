// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getDocs, getDoc, collection, query, where, getFirestore, addDoc } from 'firebase/firestore' 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_FlBYlV9w6f3cokmMRO_5slR-JffWqkQ",
  authDomain: "reactjs-eb7ba.firebaseapp.com",
  projectId: "reactjs-eb7ba",
  storageBucket: "reactjs-eb7ba.appspot.com",
  messagingSenderId: "993512941723",
  appId: "1:993512941723:web:05fb0dd3daf2a1dab37e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

// Products & moldeteca
export const GetProducts = () => {
    return getDocs(collection(db, 'products')).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}

export const GetMoldes = () => {
    return getDocs(collection(db, 'moldeteca')).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}


export const GetFilteredProducts = (category) => {
    const queryString = query(collection(db, 'products'), where('category', '==', category))

    return getDocs(queryString).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}

export const GetFilteredMoldes = (category) => {
    const queryString = query(collection(db, 'moldeteca'), where('category', '==', category))

    return getDocs(queryString).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}

export const GetDetailProduct = async (id) => {
    try {
        const docRef = doc(db, "products", id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (error) {
        console.log(error)
        return []
    }
}

export const GetDetailMolde = async (id) => {
    try {
        const docRef = doc(db, "moldeteca", id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (error) {
        console.log(error)
        return []
    }
}

export const InsertNewBuy = async (data) => {
    return await addDoc(collection(db, 'paymentTicket'), data).then(({id}) => {return id})
}