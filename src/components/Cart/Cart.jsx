import { Flex, Heading, Button, useToast, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartCard from "../CartCard/CartCard";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Cart = () => {
  const { cart, cleanCart, cantidadTotal } = useContext(CartContext);

  const toast = useToast();

  return (
    <Flex flexDir="column" p="48px" as="article" gap="48px">
      <Flex flexDir="column">
        <Heading as="h1">Tu carrito.</Heading>
        <Heading as="h2">
          Cantidad de pokemons atrapados: {cantidadTotal}
        </Heading>
      </Flex>
      {cart.length > 0 ? (
        <>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {cart.map((pokemon, index) => {
              return (
                <CartCard
                  key={index}
                  name={pokemon.pokemon}
                  type={pokemon.type}
                  image={pokemon.image}
                  id={pokemon.id}
                  cantidad={pokemon.cantidad}
                />
              );
            })}
          </SimpleGrid>
          <Flex flexDir="column" gap="8px" maxW="450px" mx="auto">
            <Link to={"/Checkout"}>
              <Button colorScheme="cyan">
                Llevar los pokemons al hospital para curar!
              </Button>
            </Link>
            <Button
              colorScheme="green"
              onClick={() => {
                cleanCart();
                toast({
                  title: "Liberaste a todos los pokemons que habias atrapado!",
                  description:
                    "Te felicito, los pokemons no deben ser esclavizados",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            >
              Liberar todos los pokemons!
            </Button>
          </Flex>
        </>
      ) : (
        <Flex flexDir="column" mt="12px" gap="12px">
          <Heading as="h2">Aun no hay nada agregado</Heading>
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
        </Flex>
      )}
    </Flex>
  );
};

export default Cart;
