// Components:
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Jobs from "./components/Jobs/Jobs";
import Error from "./components/Error/Error";
import Checkout from "./components/Checkout/Checkout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ScrollToTop from "./utils/ScrollToTop";
import { CartProvider } from "./context/CartContext";

// Librarys:
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

function App() {
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const db = getFirestore();
  //   const qry = query(collection(db, "pokemons"), orderBy("order", "asc"));

  //   getDocs(qry).then((snapshot) => {
  //     if (snapshot.size == 0) {
  //       console.log("no hay resultados");
  //     }
  //     setPokemons(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/:idPokemon" element={<ItemListContainer />} />
          <Route path="/item/:idPokemon" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
