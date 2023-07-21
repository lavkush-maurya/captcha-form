"use client";
import React, { useState, useRef } from "react";
// import Axios from "axios";
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
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [valid_token, setValidToken] = useState([]);
  const captchaRef = useRef(null);

  const SITE_KEY = "6LegN0EnAAAAAP9I8OHKXbeaCzwgwUXm7OiT6JBY";
  const SECRET_KEY = "6LegN0EnAAAAAPdEB1q-62C1Z9P0i5irQvX13qPu";

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    let token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if (token[0].success === true) {
        console.log("verified");
        setSuccessMsg("Hurray!! you have submitted the form");
      } else {
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot");
      }
    }

    toast({
      title: "Form Submitted",
      description:
        "We have received your message. We will get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    e.target.reset();
  };

  //   const verifyToken = async (token) => {
  //     let APIResponse = [];
  //   };

  return (
    <>
      <Navbar />
      <Box maxW="500px" mx="auto" mt={10} p={4}>
        <Heading as="h1" mb={6}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          {valid_token.length > 0 && valid_token[0].success === true ? (
            <h3 className="textSuccess">{SuccessMsg}</h3>
          ) : (
            <h3 className="textError">{ErrorMsg} </h3>
          )}
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
          <ReCAPTCHA
            className="recaptcha"
            sitekey={SITE_KEY}
            ref={captchaRef}
          />
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
