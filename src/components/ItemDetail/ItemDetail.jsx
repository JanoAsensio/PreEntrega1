import { Box, Image, Card, Button, Flex, Highlight } from "@chakra-ui/react";
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
        gap="20px"
      >
        <Flex>
          <Image objectFit="cover" src={image} alt={name} w="150px" />
          <Flex flexDir="column" gap={2} mt="20px">
            <Flex justifyContent="space-between" alignItems="center">
              <Highlight
                query={name}
                styles={{
                  px: "3",
                  py: "1",
                  rounded: "full",
                  bg: "#ffe582",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  border: "1px solid #cc0000",
                }}
              >
                {`
           Nombre: ${name}
           `}
              </Highlight>
            </Flex>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              fontSize="14px"
            >
              <Highlight
                query={type}
                styles={{
                  px: "2",
                  py: "0.5",
                  rounded: "full",
                  bg: "#ffe582",
                  ml: "8px",
                  border: "1px solid #cc0000",
                }}
              >
                {` Type: ${type}`}
              </Highlight>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              fontSize="14px"
            >
              <Highlight
                query={String(cantidad)}
                styles={{
                  px: "2",
                  py: "0.5",
                  rounded: "full",
                  bg: "#ffe582",
                  ml: "8px",
                  border: "1px solid #cc0000",
                }}
              >
                {`Cantidad: ${String(cantidad)}`}
              </Highlight>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              fontSize="12px"
            >
              <Highlight
                query={id}
                styles={{
                  px: "2",
                  py: "0.5",
                  rounded: "full",
                  bg: "#ffe582",
                  ml: "8px",
                  border: "1px solid #cc0000",
                }}
              >
                {`ID: ${id}`}
              </Highlight>
            </Flex>
          </Flex>
        </Flex>
        {quantity == 0 && cantidad != 0 ? (
          <ItemCount initial={1} stock={cantidad} onAdd={onAdd} />
        ) : (
          <Flex flexDir="column" gap="8px">
            <Link to={"/"}>
              <Button colorScheme="blue">Seguir atrapando pokemons</Button>
            </Link>

            <Link to={"/Cart"}>
              <Button colorScheme="orange" w="full">
                Ir al carrito{" "}
              </Button>
            </Link>
          </Flex>
        )}
      </Card>
      <Link to="/">
        <Button
          leftIcon={<AiOutlineArrowLeft />}
          colorScheme="teal"
          variant="outline"
          mt="20px"
        >
          Volver a la home
        </Button>
      </Link>
    </Box>
  );
};

export default ItemDetail;
