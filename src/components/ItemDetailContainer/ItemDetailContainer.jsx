import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components:
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

// Firebase:
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { idPokemon } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const newDoc = doc(db, "pokemons", idPokemon);

    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newPokemon = { id: res.id, ...data };
        setPokemonData(newPokemon);
      })
      .catch((error) =>
        console.error("Hubo un error haciendo el fetch: ", error)
      );
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
      cantidad={pokemonData.cantidad}
    />
  );
};

export default ItemDetailContainer;
