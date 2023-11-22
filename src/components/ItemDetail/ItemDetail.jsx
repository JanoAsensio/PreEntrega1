import {
  Box,
  Image,
  Heading,
  Text,
  Card,
  Stack,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemDetail = ({ name, image, id, type }) => {
  return (
    <Box h="calc(100vh - 12.5rem)" pt="1.25rem" px="2.5rem" as="article">
      <Card
        direction="row"
        overflow="hidden"
        variant="outline"
        justifyContent="center"
      >
        <Image objectFit="cover" src={image} alt={name} w="150px" />
        <Stack>
          <CardBody>
            <Heading size="md" textTransform="capitalize" as="h2">
              Nombre: {name}
            </Heading>
            <Text py="2">ID: {id}</Text>
            <Text py="2" textTransform="capitalize">
              Type: {type}
            </Text>
          </CardBody>
        </Stack>
      </Card>
      <Link to="/">
        <Button
          leftIcon={<AiOutlineArrowLeft />}
          colorScheme="teal"
          variant="outline"
          mt="20px"
        >
          Poke-volver
        </Button>
      </Link>
    </Box>
  );
};

export default ItemDetail;
