import React from "react"
import ItemDetail from "./ItemDetail"
import ItemCount from "./ItemCount";

const ItemDetailContainer =() => {

  const productos = [
    { id: 1,category:'men', name: 'Men T-shirt', color:'negro', price:100, description:'High Quality Mens t-shirt, 100% cotton',Imagen:'/img/mens-tshirt.jpg' },
    { id: 2, category:'women',name: 'Women T-shirt', color:'pink',price:80,description:'High Quality Mens t-shirt, 100% cotton',Imagen:'/img/womens-tshirt.jpg' },
    { id: 3, category:'unisex',name: 'Unisex Hoodie' , color:'brown',price:115,description:'High Quality Unisex hoodie, 100% cotton',Imagen:'/img/unisex-hoodie.jpg'},
    { id: 4,category:'men', name: 'Men Pants', color:'yellow', price:285, description:'High Quality Mens t-shirt, 100% cotton',Imagen:'/img/mens-tshirt.jpg' },
    { id: 5, category:'women',name: 'Women Pants', color:'brown',price:240,description:'High Quality Mens t-shirt, 100% cotton',Imagen:'/img/womens-tshirt.jpg' },
    { id: 6, category:'unisex',name: 'Unisex Pants' , color:'orange',price:270,description:'High Quality Unisex hoodie, 100% cotton',Imagen:'/img/unisex-hoodie.jpg'},
 
  ];

  const mostrarProductos = new Promise ((resolve, reject) => {
    if (productos.length >0) {
      setTimeout(()=> {
        resolve(productos)
      }, 500)
    }else {
      reject("Couldn't find any products")
    }
  })

  mostrarProductos
  .then((resultado) => {
    console.log(resultado)
  })
  .catch ((error)=>{
    console.log(error)
  })
  
    return(
        <>
        <ItemDetail 
        productos={productos}/>
        </>
    )
}




export default ItemDetailContainer