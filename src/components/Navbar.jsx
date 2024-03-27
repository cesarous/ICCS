import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';


function Navbar() {
  return (
    <Box bg="#283d90" py="3">
      <Flex maxW="1200px" mx="auto" px="4">
        <Link href="#home" fontSize="xl" fontWeight="bold" color="white">Home</Link>
        <Spacer id="home" />
        <Box sx={{marginLeft:"10%"}}>
          <Box>
            <Link href="#aboutus-section"  mr="4" color="white">About Us</Link>
          </Box>
          <Box>
            <Link href="#services-list" mr="4" color="white">Services</Link>
          </Box>
          <Box>
            <Link href="#map" mr="4" color="white">Map</Link>
          </Box>
          <Box>
            <Link href="#contact-form" mr="4" color="white">Contact Us</Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;

