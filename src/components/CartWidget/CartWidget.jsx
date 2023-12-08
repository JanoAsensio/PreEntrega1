import { Button, Icon, Text } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to={`/cart`}>
      <Button border="1px solid black" bgColor="transparent" gap="0.375rem">
        <Icon as={LuShoppingCart} />
        <Text>{cantidadTotal}</Text>
      </Button>
    </Link>
  );
};

export default CartWidget;
