import { Box, Button, Circle, Heading, Img, LightMode, Stack, Text, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import { FaPlay } from "react-icons/fa";

export const Hero: React.VFC = () => {
  return (
    <Box>
      <Box as="section" bg="gray.800" color="white" py="7.5rem">
        <Box maxW={{ base: "xl", md: "5xl" }} mx="auto" px={{ base: "6", md: "8" }}>
          <Box textAlign="center">
            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Design collaboration without the chaos
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Text>
          </Box>

          <Stack justify="center" direction={{ base: "column", md: "row" }} mt="10" mb="20" spacing="4">
            <LightMode>
              <Button as="a" href="#" size="lg" colorScheme="blue" px="8" fontWeight="bold" fontSize="md">
                Get started free
              </Button>
              <Button as="a" href="#" size="lg" colorScheme="whiteAlpha" px="8" fontWeight="bold" fontSize="md">
                Request demo
              </Button>
            </LightMode>
          </Stack>

          <Box className="group" cursor="pointer" position="relative" rounded="lg" overflow="hidden">
            <Img
              alt="Screenshot of Envelope App"
              src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621085270/pro-website/app-screenshot-light_kit2sp.png"
            />
            <Circle
              size="20"
              as="button"
              bg="white"
              shadow="lg"
              color="blue.600"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              fontSize="xl"
              transition="all 0.2s"
              _groupHover={{
                transform: "translate3d(-50%, -50%, 0) scale(1.05)",
              }}
            >
              <VisuallyHidden>Play demo video</VisuallyHidden>
              <FaPlay />
            </Circle>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
