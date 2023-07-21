"use client";

import Navbar from "@/components/Navbar";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

function HomeClientComponent() {
  return (
    <>
      <Navbar />
      <Box p={8}>
        <Center>
          <Box>
            <Heading as="h1" textAlign="center" fontSize="3xl">
              Home Page
            </Heading>
            <Center>
              <Text fontSize="xl" py={4}>
                this is capcha form demo example
              </Text>
            </Center>
          </Box>
        </Center>
      </Box>
    </>
  );
}
export default HomeClientComponent;
