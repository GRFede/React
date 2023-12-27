import React from 'react'
import{Card,CardBody,Stack,Heading,Divider,CardFooter,ButtonGroup, Button} from '@chakra-ui/react'


const Item = ({titulo}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titulo}</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button>
        Ver detalles
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item