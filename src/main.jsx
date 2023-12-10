import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD75EcLY92roSsAT8XqHSC1jrN23TEhOBI",
  authDomain: "coderapi-eea4d.firebaseapp.com",
  projectId: "coderapi-eea4d",
  storageBucket: "coderapi-eea4d.appspot.com",
  messagingSenderId: "812864256190",
  appId: "1:812864256190:web:3d8dcc5a7994f6980946ef",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
