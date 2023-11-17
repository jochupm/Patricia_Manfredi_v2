import React, { useState } from "react";
import { useParams } from "react-router-dom"
import {Card, CardBody, Stack, Divider, ButtonGroup, Button, CardFooter, Heading, Text, useSafeLayoutEffect} from '@chakra-ui/react'
import ItemCount from "./ItemCount";

const ItemDetail = ({productos})=> {
    const {id}= useParams()
    
    // const [quantityAdded, setQuantityAdded]= useState(0)

    // const handleOnAdd=(quantity)=>{
    //     setQuantityAdded(quantity)
    // }

    const filteredProducts = productos.filter((producto) => producto.id==id)

    return (
        <>
         {
             filteredProducts.map((p) => {
                 return(
                     <Card maxW='sm'>
                     <CardBody>
     
                         <Stack mt='6' spacing='3'>
                             <p></p>
                             <img src={p.Imagen} alt=""  width="220px" height="319px" />
                             <Heading size='md'>{p.name}</Heading>
     
                         </Stack>
                     </CardBody>
                     <Text>Description: {p.description}</Text>
                     <Text>Category: {p.category}</Text>
                     <Text>Price: $ {p.price}</Text>
 
                     <Divider/>
                     <CardFooter>
                         <ButtonGroup spacing='2'>

                         </ButtonGroup>
                     </CardFooter>
                 </Card>
                 )
             })
         }
         {
            // quantityAdded >0?(
            //     <Link to='/cart' className='Option'> Finish order</Link>
            // ) : 
            // (          <ItemCount initial={1} onAdd={handleOnAdd}/>)
            <ItemCount/>
}
      </>
     )
 }

export default ItemDetail
