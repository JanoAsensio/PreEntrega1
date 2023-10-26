/* eslint-disable react/prop-types */
import {
  Box,
  HStack,
  List,
  ListItem,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";

import CartWidget from "./CartWidget";

const Navbar = ({ items }) => {
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <Box
      as="nav"
      height="8.75rem"
      backgroundColor="#E7F263"
      border="3px solid #F70B7E"
      borderBottomRadius="0.75rem"
    >
      <HStack
        h="full"
        w="full"
        justifyContent="space-between"
        px={{ base: "1.5rem", lg: "2.5rem" }}
      >
        <Flex alignItems="start" justifyContent="center">
          <Image src="/darth_vader.png" alt="logo" />
        </Flex>

        <List
          display="flex"
          textTransform="uppercase"
          gap={4}
          alignItems="center"
        >
          {items.map((item, index) => {
            return (
              <ListItem
                key={index}
                borderRadius="base"
                h={10}
                display="flex"
                alignItems="center"
              >
                <Button
                  bgColor="transparent"
                  _hover={{ bgColor: "transparent" }}
                  textTransform="uppercase"
                  fontSize="0.75rem"
                  onClick={() => handleClick(item.title)}
                >
                  {item.title}
                </Button>
              </ListItem>
            );
          })}
          <CartWidget />
        </List>
      </HStack>
    </Box>
  );
};
export default Navbar;
