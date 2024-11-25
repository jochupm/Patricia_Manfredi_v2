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
    return getDocs(collection(db, 'merceria')).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}

export const GetMolde = () => {
    return getDocs(collection(db, 'moldeteca')).then(response => {
        return response.docs.map((doc) => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
    }).catch(err => {
        console.log(err)
    })
}

// export const GetCurso = () => {
//     return getDocs(collection(db, 'cursos')).then(response => {
//         return response.docs.map((doc) => {
//             const data = doc.data()
//             return {id: doc.id, ...data}
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// }

export const GetCurso = () => {
    return getDocs(collection(db, 'cursos'))
      .then((response) => {
        return response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data }; // Devuelve datos completos junto con el ID
        });
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        return [];
      });
  };

export const GetFilteredMolde = (category) => {
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

// export const GetFilteredCurso = (category) => {
//     const queryString = query(collection(db, 'cursos'), where('category', '==', category))

//     return getDocs(queryString).then(response => {
//         return response.docs.map((doc) => {
//             const data = doc.data()
//             return {id: doc.id, ...data}
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// }

// Obtener cursos filtrados por categoría
export const GetFilteredCurso = (category) => {
    // Si la categoría es "Todos", obtenemos todos los cursos
    if (category === "Todos") {
        return GetCurso(); // Llama a la función que obtiene todos los cursos
    }

    // Si hay una categoría específica, filtra por esa categoría
    const queryString = query(
        collection(db, "cursos"),
        where("category", "==", category)
    );

    return getDocs(queryString)
        .then((response) => {
            return response.docs.map((doc) => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });
        })
        .catch((err) => {
            console.log(err);
        });
};


export const GetDetailProduct = async (id) => {
    try {
        const docRef = doc(db, "merceria", id)
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

// export const GetDetailCurso = async (id) => {
//     try {
//         const docRef = doc(db, "cursos", id)
//         const docSnap = await getDoc(docRef)
//         return docSnap.data()
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }

// Obtener detalles de un curso por ID
export const GetDetailCurso = async (id) => {
    try {
      const docRef = doc(db, "cursos", id); // Reemplaza "db" con tu instancia de Firestore
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data(); // Retorna los datos del documento
      } else {
        console.error("No se encontró el documento.");
        return null; // Retorna null si no existe el documento
      }
    } catch (error) {
      console.error("Error al obtener el documento:", error);
      return null; // Maneja errores retornando null
    }
  };


export const InsertNewBuy = async (data) => {
    return await addDoc(collection(db, 'paymentTicket'), data).then(({id}) => {return id})
}