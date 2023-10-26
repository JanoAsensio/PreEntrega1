import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Box } from "@chakra-ui/react";

function App() {
  const menuItems = [
    { title: "Categoria 1", slug: "" },
    { title: "Categoria 2", slug: "" },
    { title: "Categoria 3", slug: "" },
    { title: "Categoria 4", slug: "" },
  ];

  const greeting = "This is a message to you..";
  return (
    <Box w="full">
      <Navbar items={menuItems} />
      <ItemListContainer content={greeting} />
    </Box>
  );
}

export default App;
