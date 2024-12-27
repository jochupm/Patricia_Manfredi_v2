import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { GetDetailBlog} from "../services/firebaseConfig";
// import { CartContext } from "../provider/CartProvider";
import BlogDetail from "./BlogDetail";

const BlogDetailContainer = () => {
  const { id } = useParams();
//   const { cart } = useContext(CartContext);

  const [blog, setBlog] = useState(null);
//   const [quantityInCart, setQuantityInCart] = useState(0);

//   useEffect(() => {
//     GetDetailBlog(id).then((data) =>{
//       //console.log("Data fetched:", data); // Esto mostrará el resultado en la consola
//       data.length !== 0 ? setBlog({ id: id, ...data }) : setBlog(data)
//   });

useEffect(() => {
    GetDetailBlog(id).then((data) => {
      // Verificar si se encontró el blog
      setBlog(data.length !== 0 ? { id, ...data } : null);
    });
  }, [id]);



return (
    <div className="flex justify-center my-10">
        <BlogDetail {...blog} />
    </div>
  );
};



export default BlogDetailContainer;