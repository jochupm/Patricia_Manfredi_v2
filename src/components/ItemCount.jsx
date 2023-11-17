import React from "react";
import {useState} from "react"
import {Button, Flex, Box, Spacer, Badge} from '@chakra-ui/react'
import { PhoneIcon, AddIcon,WarningIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = () => {
    const[count, setCount]= useState(0)

    const show =()=>{
        alert(`You are going to add ${count} products to your order`)
    }
    return (
        <Flex> 
            <Box>
<Button variant='outline' colorScheme='teal' onClick={()=>setCount(count - 1)} m={1}>
<MinusIcon/>
</Button>
{/* <Badge ml='2x1' fontSize='1.5rem' colorScheme='green' variant='outline'>{count}</Badge> */}

  <Badge badgeContent={count} color="secondary">{count}
  </Badge>
{/* <Button m={1}>
    {count}
</Button> */}
<Button variant='outline' colorScheme='teal' onClick={()=>setCount(count + 1)} m={1}>

<AddIcon/>
</Button>
            </Box>
            <Spacer/>
            <Box m={1}>
                <Button onClick={show}>Add to cart</Button>
                </Box>
        </Flex>
   )
}

export default ItemCount