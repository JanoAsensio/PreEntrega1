import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

// Components:
import Item from "../Item/Item";
import Loading from "../Loading/Loading";

// Firebase:
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const { idPokemon } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const pokemons = idPokemon
      ? query(
          collection(db, "pokemons"),
          where("type", "==", idPokemon),
          orderBy("order", "asc")
        )
      : query(collection(db, "pokemons"), orderBy("order", "asc"));

    getDocs(pokemons)
      .then((res) => {
        const newPokemons = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setPokemonData(newPokemons);
      })
      .catch((error) =>
        console.error("Hubo un poke-error haciendo el poke-fetch: ", error)
      );

    // const fetchPokemonData = async () => {
    //   try {
    //     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    //     const data = await response.json();
    //     const promises = data.results.map(async (pokemon) => {
    //       const response = await fetch(pokemon.url);
    //       const pokemonDetails = await response.json();
    //       return {
    //         id: pokemonDetails.id,
    //         name: pokemonDetails.name,
    //         image: pokemonDetails.sprites.front_default,
    //         type: pokemonDetails.types[0].type.name,
    //         cantidad: randomInt,
    //       };
    //     });
    //     const mappedPokemon = await Promise.all(promises);
    //     if (idPokemon) {
    //       const filtersPokemon = mappedPokemon.filter(
    //         (p) => p.type === idPokemon
    //       );
    //       setPokemonData(filtersPokemon);
    //     } else {
    //       setPokemonData(mappedPokemon);
    //     }
    //   } catch (error) {
    //     console.error("Hubo un poke-error haciendo el poke-fetch: ", error);
    //   }
    // };
    // fetchPokemonData();
  }, [idPokemon]);

  if (!pokemonData) {
    return <Loading />;
  }

  return (
    <Box maxW="75rem" mx="auto" mt="2.5rem" mb="5rem" as="section">
      <Heading as="h1" mb="3.75rem">
        Listado de Pokemons {idPokemon ? `tipo: ${idPokemon}` : "total"}
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={6}
      >
        {pokemonData.map((pokemon, index) => (
          <GridItem rowSpan={2} colSpan={1} w="100%" key={index}>
            <Item
              name={pokemon.name}
              image={pokemon.image}
              order={pokemon.order}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
