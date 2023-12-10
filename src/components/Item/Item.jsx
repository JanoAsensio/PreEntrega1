import {
  Image,
  Highlight,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, image, id }) => {
  return (
    <Card maxW="sm" alignItems="center">
      <CardBody>
        <Image m="auto" src={image} alt={name} borderRadius="lg" />
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
              {`Nombre: ${name}`}
            </Highlight>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="14px"
          >
            <Highlight
              query={id}
              styles={{
                px: "2",
                py: "0.5",
                rounded: "full",
                bg: "#ffe582",
                ml: "8px",
                border: "1px solid #cc0000",
              }}
            >
              {`ID: ${id}`}
            </Highlight>
          </Flex>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link to={`/item/${id}`}>
          <Button variant="solid" bgColor="#3d7dca" color="#fff">
            Ir a la pagina
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Item;
