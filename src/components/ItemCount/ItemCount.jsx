import { Box, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const addToCart = () => {
    onAdd(count);
  };

  return (
    <Box>
      <Flex gap="8px" alignItems="center">
        <Button onClick={decrement}>Poke-sacar 1</Button>
        <Flex
          alignItems="center"
          justifyContent="center"
          bgColor="#ffcb05"
          w="36px"
          h="36px"
          rounded="12px"
        >
          <Text fontWeight="bold">{count}</Text>
        </Flex>
        <Button onClick={increment}>Poke-agregar 1</Button>
      </Flex>
      <Button mt="8px" onClick={addToCart} colorScheme="blue" w="full">
        Atrapalo ya!
      </Button>
    </Box>
  );
};

export default ItemCount;
