import {
  Box,
  Image,
  Heading,
  Text,
  Card,
  Stack,
  CardBody,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

const ItemDetail = ({ name, image, id, type, cantidad }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    addToCart(name, type, image, id, cantidad);
  };
  return (
    <Box h="calc(100vh - 12.5rem)" pt="1.25rem" px="2.5rem" as="article">
      <Card
        direction="column"
        overflow="hidden"
        variant="outline"
        justifyContent="center"
        alignItems="center"
        py="24px"
      >
        <Flex>
          <Image objectFit="cover" src={image} alt={name} w="150px" />
          <Stack>
            <CardBody>
              <Heading size="md" textTransform="capitalize" as="h2">
                Nombre: {name}
              </Heading>
              <Text py="2">ID: {id}</Text>
              <Text py="2" textTransform="capitalize">
                Type: {type}
              </Text>
              <Text py="2" textTransform="capitalize">
                Cantidad: {cantidad}
              </Text>
            </CardBody>
          </Stack>
        </Flex>
        {quantity == 0 && cantidad != 0 ? (
          <ItemCount initial={1} stock={cantidad} onAdd={onAdd} />
        ) : (
          <Link to={"/Cart"}> Poke-ir al carrito </Link>
        )}
      </Card>
      <Link to="/">
        <Button
          leftIcon={<AiOutlineArrowLeft />}
          colorScheme="teal"
          variant="outline"
          mt="20px"
        >
          Poke-volver
        </Button>
      </Link>
    </Box>
  );
};

export default ItemDetail;
