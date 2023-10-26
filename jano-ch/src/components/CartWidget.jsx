import { Button, Icon, Text } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const CartWidget = () => {
  const toast = useToast();
  const [number, setNumber] = useState(0);
  setNumber; //temporariamente desactivado..

  return (
    <Button
      border="1px solid black"
      bgColor="transparent"
      gap="0.375rem"
      onClick={() =>
        toast({
          title: "Esta es una notificación!",
          description: "Mostrando un numero hardcodeado (fijo): '0'",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      <Icon as={LuShoppingCart} />
      <Text>{number}</Text>
    </Button>
  );
};

export default CartWidget;
