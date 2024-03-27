import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';


function Navbar() {
  return (
<Box bg="#283d90" py="3">
  <Flex maxW="1200px" mx="auto" px="4" justifyContent="space-between" alignItems="center">
    <Link href="#home" fontSize="xl" fontWeight="bold" color="white">Home</Link>
    <Spacer />
    <Box sx={{ display: { base: "none", md: "block" } }}>
      <Link href="#aboutus-section" mr="4" color="white">About Us</Link>
      <Link href="#services-list" mr="4" color="white">Services</Link>
      <Link href="#map" mr="4" color="white">Map</Link>
      <Link href="#contact-form" color="white">Contact Us</Link>
    </Box>
  </Flex>
</Box>

  );
}

export default Navbar;

