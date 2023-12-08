import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartCard = ({ name, type, image, cantidad, id }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={name} borderRadius="lg" />
        <Heading as="h3" size="md">
          Pokemon: {name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>Tipo: {type}</Text>
        <Text>Cantidad: {cantidad}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="orange" onClick={() => removeItem(id)}>
          Liberar Pokemon
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartCard;
