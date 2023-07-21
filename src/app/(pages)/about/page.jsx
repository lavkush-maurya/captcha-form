"use client";
import Navbar from "@/components/Navbar";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

export default function AboutUsPage() {
  return (
    <Box>
      <Navbar />
      <Center>
        <Box w="80%" py={8}>
          <Heading as="h1" textAlign="center" fontSize="3xl">
            About Us
          </Heading>
          <Text fontSize="xl" py={4}>
            Welcome to our website! We are a dedicated team of professionals
            passionate about delivering high-quality products and services to
            our customers. Our mission is to make the world a better place by
            providing innovative solutions that address the needs of our
            clients.
          </Text>
          <Text fontSize="xl" py={4}>
            At our company, we believe in fostering a culture of collaboration,
            creativity, and continuous learning. We strive to stay at the
            forefront of technological advancements, allowing us to offer
            cutting-edge solutions that drive success for our clients.
          </Text>
          <Text fontSize="xl">
            Customer satisfaction is our top priority, and we go the extra mile
            to ensure that our clients are delighted with our products and
            services. We value feedback and use it to continually improve and
            exceed expectations.
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
