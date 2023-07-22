"use client";
import React, { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const toast = useToast();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const captchaRef = useRef(null);
  const SITE_KEY = "6LegN0EnAAAAAP9I8OHKXbeaCzwgwUXm7OiT6JBY";
  const SECRET_KEY = "6LegN0EnAAAAAPdEB1q-62C1Z9P0i5irQvX13qPu";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Message = document.getElementById("message").value;
    const data = { Name, Email, Message };

    try {
      const token = captchaRef.current.getValue();
      captchaRef.current.reset();

      if (!token) {
        throw new Error("Captcha token not available");
      }
      if (!isCaptchaVerified) {
        console.log("not verified");
        toast({
          title: "Error",
          description: "Sorry!! Verify you are not a bot",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      const response = await axios.post("http://localhost:1337/api/contacts", {
        data: data,
        captchaToken: token,
        secretKey: SECRET_KEY,
      });

      if (response.data.success) {
        console.log("verified");
        e.target.reset();
        setIsCaptchaVerified(true);
        toast({
          title: "Form Submitted",
          description:
            "We have received your message. We will get back to you soon!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        console.log("not verified");
        setIsCaptchaVerified(false);
        toast({
          title: "Error",
          description: "Sorry!! Verify you are not a bot",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast({
        title: "Error",
        description: "An error occurred while submitting the form.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box maxW="500px" mx="auto" mt={10} p={4}>
        <Heading as="h1" mb={6}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4} isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" placeholder="Enter your name" />
          </FormControl>
          <FormControl id="email" mb={4} isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="message" mb={4} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your message" />
          </FormControl>
          <FormControl id="captcha" mb={4} isRequired>
            <ReCAPTCHA
              className="recaptcha"
              sitekey={SITE_KEY}
              ref={captchaRef}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </form>
        <Box
          as="footer"
          mt={10}
          textAlign="center"
          fontSize="sm"
          color="gray.500"
        >
          © 2023 - Created with 💚 -{" "}
          <a
            href="http://lavv-blog.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lavkush Maurya
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
