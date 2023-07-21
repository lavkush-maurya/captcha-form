"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box
      bg="green.400"
      p={4}
      display="flex"
      margin={"0 10%"}
      justifyContent="space-evenly"
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/about"}>About</Link>
    </Box>
  );
};

export default Navbar;
