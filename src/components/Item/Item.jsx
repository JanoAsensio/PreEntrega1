import {
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, image, order }) => {
  return (
    <Card maxW="sm" alignItems="center">
      <CardBody>
        <Image m="auto" src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" as="h2" textTransform="capitalize">
            Nombre: {name}
          </Heading>
          <Text color="blue.600" fontSize="2xl">
            Order: {order}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link to={`/item/${order}`}>
          <Button variant="solid" bgColor="#3d7dca" color="#fff">
            Ir a la pagina
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Item;
