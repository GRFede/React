import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import{Card,CardBody,Stack,Heading,Divider,CardFooter,ButtonGroup,Text, Button} from '@chakra-ui/react'


const ItemDetail = ({titulo,descripcion,precio}) => {
  return (
    <Card maxW='sm'>
    <CardBody>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{titulo}</Heading>
        <Text>
         {descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${precio}
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