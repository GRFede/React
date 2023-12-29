import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import{Card,CardBody,Stack,Heading,Divider,CardFooter,ButtonGroup,Text, Button} from '@chakra-ui/react'


const ItemDetail = ({ product }) => {

  return (
<Card maxW='sm'>
<CardBody>
<Stack mt='6' spacing='3'>
        <Heading size='md'>{product.titulo}</Heading>
        <Text>
         {product.descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${product.precio}
        </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>
    <Button>
      <ItemCount/>
    </Button>
  </ButtonGroup>
</CardFooter>
</Card>
    )
}
export default ItemDetail