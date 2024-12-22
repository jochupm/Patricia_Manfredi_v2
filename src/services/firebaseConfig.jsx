// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getDocs, getDoc, collection, query, where, getFirestore, addDoc } from 'firebase/firestore' ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_FlBYlV9w6f3cokmMRO_5slR-JffWqkQ",
  authDomain: "reactjs-eb7ba.firebaseapp.com",
  // databaseURL: "https://reactjs-eb7ba-default-rtdb.firebaseio.com",
  projectId: "reactjs-eb7ba",
  storageBucket: "reactjs-eb7ba.appspot.com",
  messagingSenderId: "993512941723",
  appId: "1:993512941723:web:05fb0dd3daf2a1dab37e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)



export const GetMolde = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "moldeteca"));
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching moldeteca:", error);
      return [];
    }
  };


// Obtener moldes filtrados por categoría
export const GetFilteredMolde =  (category) => {
  const queryString = query(collection(db, 'moldes'), where('category', '==', category))

  return getDocs(queryString).then(response => {
      return response.docs.map((doc) => {
          const data = doc.data()
          return {id: doc.id, ...data}
      })
  }).catch(err => {
      console.log(err)
  })
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



export const GetCursos = () => {
  return getDocs(collection(db, 'cursos'))
    .then((response) => {
      return response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
    })
    .catch((err) => {
      console.error("Error fetching courses:", err);
      return []; // Retorna un arreglo vacío en caso de error
    });
};


export const GetFilteredCursos =  (category) => {
  const queryString = query(collection(db, 'cursos'), where('category', '==', category))

  return getDocs(queryString).then(response => {
      return response.docs.map((doc) => {
          const data = doc.data()
          return {id: doc.id, ...data}
      })
  }).catch((err) => {
    console.error("Error fetching filtered courses:", err);
    return []; // Retorna un arreglo vacío en caso de error
  });
};

export const GetDetailCurso = async (id) => {
  try {
    const docRef = doc(db, "cursos", id)
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


export const GetBlogs = () => {
    const queryString = query(collection(db, 'blogs'))

    return getDocs(queryString).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}


export const GetDetailBlog = async (id) => {
    try {
        const docRef = doc(db, "blogs", id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (error) {
        console.log(error)
        return []
    }
}
