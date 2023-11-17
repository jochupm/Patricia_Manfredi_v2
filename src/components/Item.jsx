import React from "react";
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, CardHeader } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({name, Imagen,id,price}) => {

    return (
        <>
        <div>
            <Card maxW='sm'>
                <CardBody>
                <Stack mt='65' spacing='2'>

<CardHeader>                        
    <Heading size='md'>{name}</Heading>
</CardHeader>
                        <p></p>
                        <img src={Imagen} alt=""  width="180px" height="252px" />
                    </Stack>
                    <Text>$ {price}</Text>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <ButtonGroup spacing='8'>
                        <Button variant='solid' colorScheme='blue'>
                            <Link to={`/product/${id}`}>
                                See Detail
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}

export default Item