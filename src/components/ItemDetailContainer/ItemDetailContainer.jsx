import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components:
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { idPokemon } = useParams();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
        );
        const data = await response.json();
        console.log(data.types[0].type.name);
        setPokemonData({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          type: data.types[0].type.name,
        });
      } catch (error) {
        console.error("Hubo un poke-error haciendo el poke-fetch: ", error);
      }
    };

    fetchPokemonData();
  }, [idPokemon]);

  if (!pokemonData) {
    return <Loading />;
  }

  return (
    <ItemDetail
      name={pokemonData.name}
      image={pokemonData.image}
      id={pokemonData.id}
      type={pokemonData.type}
    />
  );
};

export default ItemDetailContainer;
