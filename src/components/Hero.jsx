import React from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import './css/Hero.css'; // import CSS file

function Hero() {
  return (
    <Box bg="#ffffff" py="10">
      <Center>
        <Image src="ICCS_logo.png" alt="Logo" maxW="350px" className="animate" />
      </Center>
    </Box>
  );
}

export default Hero;
