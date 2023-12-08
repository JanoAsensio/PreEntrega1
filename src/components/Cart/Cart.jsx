import { Flex, Heading, Button, useToast, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartCard from "../CartCard/CartCard";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Cart = () => {
  const { cart, cleanCart } = useContext(CartContext);

  const toast = useToast();

  return (
    <Flex flexDir="column" py="20px" pl="40px" as="article">
      <Heading as="h1">Tu carrito</Heading>

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
          <Button
            mt="24px"
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
            Poke-liberar todos los pokemons!
          </Button>
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
              Poke-volver
            </Button>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Cart;
