import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Flex,
  Highlight,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartCard = ({ name, type, image, cantidad, id }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Card>
      <CardHeader>
        <Image src={image} alt={name} borderRadius="lg" mx="auto" />
      </CardHeader>
      <CardBody>
        <Flex flexDir="column" gap={2} mt="20px">
          <Flex justifyContent="space-between" alignItems="center">
            <Highlight
              query={name}
              styles={{
                px: "3",
                py: "1",
                rounded: "full",
                bg: "#ffe582",
                textTransform: "capitalize",
                fontWeight: "500",
                border: "1px solid #cc0000",
              }}
            >
              {`
           Nombre: ${name}
           `}
            </Highlight>
          </Flex>

          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="14px"
          >
            <Highlight
              query={type}
              styles={{
                px: "2",
                py: "0.5",
                rounded: "full",
                bg: "#ffe582",
                ml: "8px",
                border: "1px solid #cc0000",
              }}
            >
              {` Type: ${type}`}
            </Highlight>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="14px"
          >
            <Highlight
              query={String(cantidad)}
              styles={{
                px: "2",
                py: "0.5",
                rounded: "full",
                bg: "#ffe582",
                ml: "8px",
                border: "1px solid #cc0000",
              }}
            >
              {`Cantidad: ${String(cantidad)}`}
            </Highlight>
          </Flex>
        </Flex>
      </CardBody>
      <CardFooter>
        <Button w="full" colorScheme="orange" onClick={() => removeItem(id)}>
          Liberar Pokemon
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartCard;
