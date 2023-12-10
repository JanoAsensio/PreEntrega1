import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import React, { useState, useContext } from "react";

// Firebase:
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [rango, setRango] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { cart, cantidadTotal, cleanCart } = useContext(CartContext);

  const handleForm = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !rango || !email) {
      setError("Completar los campos requeridos");
      return;
    }
    const db = getFirestore();
    const orden = {
      items: cart.map((pokemon) => ({
        name: pokemon.pokemon,
        type: pokemon.type,
        cantidad: pokemon.cantidad,
      })),
      total: cantidadTotal,
      fecha: new Date(),
      nombre,
      apellido,
      email,
      rango,
    };

    Promise.all(
      orden.items.map(async (pokeOrden) => {
        const pokeRef = doc(db, "pokemons", pokeOrden);
        const pokeDoc = await getDoc(pokeRef);
        const pokeQuantity = pokeDoc.data().cantidad;

        await updateDoc(pokeRef, {
          cantidad: pokeQuantity - pokeOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), pokeOrden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            cleanCart();
          })
          .catch((error) => {
            setError(`Se produjo un error al crear la orden: ${error}`);
          });
      })
      .catch((error) => {
        setError(
          `No se pudo actualizar la cantidad, intentelo mas tarde ${error}`
        );
      });
  };

  return (
    <Box h="calc(100vh - 12.5rem)" pt="1.25rem" px="2.5rem" as="article">
      <Flex flexDir="column">
        <Heading as="h4" mb="8px">
          Ingresa tus datos
        </Heading>

        <Flex borderTop="1px solid grey" flexDir="column" p="8px" gap="8px">
          <Heading as="h5" fontSize="24px">
            Catched:
          </Heading>
          {cart.map((pokemon, index) => {
            return (
              <Flex key={index} gap="12px">
                <Text textTransform="capitalize">
                  name:<b> {pokemon.pokemon}</b>
                </Text>
                <Text textTransform="capitalize">
                  type:<b> {pokemon.type}</b>
                </Text>
                <Text textTransform="capitalize">
                  quantity:<b> {pokemon.cantidad}</b>
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <form onSubmit={handleForm}>
          <Flex flexDir="column" p="8px" gap="8px" borderTop="1px solid grey">
            <Flex gap="4px" alignItems="center">
              <label htmlFor="nombre">Name:</label>
              <input
                id="nombre"
                type="text"
                onChange={(e) => setNombre(e.target.value)}
                style={{
                  border: "1px solid red",
                  borderRadius: "8px",
                  padding: "4px 8px",
                }}
              />
            </Flex>
            <Flex gap="4px" alignItems="center">
              <label htmlFor="apellido">Subname:</label>
              <input
                id="apellido"
                type="text"
                onChange={(e) => setApellido(e.target.value)}
                style={{
                  border: "1px solid red",
                  borderRadius: "8px",
                  padding: "4px 8px",
                }}
              />
            </Flex>
            <Flex gap="4px" alignItems="center">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  border: "1px solid red",
                  borderRadius: "8px",
                  padding: "4px 8px",
                }}
              />
            </Flex>
            <Flex gap="4px" alignItems="center">
              <label htmlFor="rango">Range:</label>
              <input
                id="rango"
                type="text"
                onChange={(e) => setRango(e.target.value)}
                style={{
                  border: "1px solid red",
                  borderRadius: "8px",
                  padding: "4px 8px",
                }}
              />
            </Flex>
            {error && <Text color="red">{error}</Text>}
            <Button type="submit">Adoptar!</Button>
            {ordenId && (
              <Text>Tu numero de orden de liberacion es el: {ordenId}</Text>
            )}
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default Checkout;
