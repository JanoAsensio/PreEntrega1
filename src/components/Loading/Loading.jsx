import { Box, keyframes, Flex, Image } from "@chakra-ui/react";

const Loading = () => {
  const rotate = () =>
    keyframes({
      "0%": {
        transform: "rotate(0deg) translateZ(0)",
      },
      "100%": {
        transform: "rotate(360deg) translateZ(0)",
      },
    });
  return (
    <Flex justifyContent="center" alignItems="center" h="calc(100vh - 12.5rem)">
      <Box
        sx={{
          ".pokeball": {
            animation: `1s linear infinite ${rotate()}`,
            transformOrigin: "center",
          },
        }}
      >
        <Image
          className="pokeball"
          src="/pokebola.png"
          alt="poke-loading"
          h="2.5rem"
          w="2.5rem"
        />
      </Box>
    </Flex>
  );
};

export default Loading;
