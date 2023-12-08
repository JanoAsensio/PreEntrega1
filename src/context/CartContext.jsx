import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [exists, setExists] = useState(false);

  const addToCart = (pokemon, type, image, id, cantidad) => {
    isInCart(id);

    if (!exists) {
      setCart((prev) => [...prev, { pokemon, type, id, image, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
    } else {
      const cartUpdated = cart.map((arr) => {
        if (arr.id == id) {
          return { ...arr, cantidad: arr.cantidad + cantidad };
        } else {
          return arr;
        }
      });
      setCart(cartUpdated);
      setCantidadTotal((prev) => prev + cantidad);
    }
  };

  const isInCart = (pokeId) => {
    setExists(cart.some((poke) => poke.id === pokeId));
  };

  const removeItem = (id) => {
    const liberarPokemon = cart.find((arr) => arr.id == id);
    setCantidadTotal((prev) => prev - liberarPokemon.cantidad);

    const cartUpdated = cart.filter((arr) => arr.id !== id);
    setCart(cartUpdated);
  };

  const cleanCart = () => {
    setCart([]);
    setCantidadTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, cantidadTotal, addToCart, removeItem, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
