import {
  Box,
  HStack,
  List,
  ListItem,
  Image,
  Flex,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  const types = [
    { title: "Normal", slug: "normal" },
    { title: "Grass", slug: "grass" },
    { title: "Fire", slug: "fire" },
    { title: "Water", slug: "water" },
    { title: "Bug", slug: "bug" },
  ];
  const menuItems = [
    { title: "About", slug: "about" },
    { title: "Contact", slug: "contact" },
    { title: "Jobs", slug: "jobs" },
  ];

  return (
    <Box
      as="nav"
      height="8.75rem"
      backgroundColor="#ffcb05"
      border="3px solid #cc0000"
      borderBottomRadius="0.75rem"
    >
      <HStack
        h="full"
        w="full"
        justifyContent="space-between"
        px={{ base: "1.5rem", lg: "2.5rem" }}
      >
        <Flex alignItems="start" justifyContent="center">
          <Link to="/">
            <Image src="/pokebola.png" alt="logo" w="2.5rem" />
          </Link>
        </Flex>

        <List
          display="flex"
          textTransform="uppercase"
          gap={4}
          alignItems="center"
        >
          {types.map((item, index) => {
            return (
              <Link to={item.slug} key={index}>
                <ListItem
                  borderRadius="base"
                  h={10}
                  display="flex"
                  alignItems="center"
                  fontSize="1rem"
                  fontWeight={500}
                >
                  {item.title}
                </ListItem>
              </Link>
            );
          })}
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          {menuItems.map((item, index) => {
            return (
              <Link to={item.slug} key={index}>
                <ListItem
                  borderRadius="base"
                  h={10}
                  display="flex"
                  alignItems="center"
                  fontSize="1rem"
                  fontWeight={500}
                >
                  {item.title}
                </ListItem>
              </Link>
            );
          })}
          <CartWidget />
        </List>
      </HStack>
    </Box>
  );
};
export default Navbar;
