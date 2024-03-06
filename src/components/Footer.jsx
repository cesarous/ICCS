import React from 'react';
import { Box, Container, Text, Badge, IconButton, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <Box bg="gray.800" py={8}>
      <Container maxW="container.lg"  justifyContent="space-between" >
        <Box justifyContent="space-between" display = "flex" alignItems="center">

          <Box justifyContent="space-between" alignItems="center">

              <Text color="white" fontWeight="bold" mb={2}>Contact Us</Text>
              {/* Other contact information */}
              <a href="tel:+1234567890">
                <Box color="white">

                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
                  Call Us: (773) 895-9304
                </Box>

              </a>
              <Box>
                
              <a href="mailto:monroyisrael@yahoo.com">
                <Box color="white">
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }}/>
                    Email: monroyisrael@yahoo.com
                </Box>
              </a>
              </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            {/* Social media links with icons */}
            <HStack spacing={4}>
              <a href="https://www.instagram.com/israelcarpetcleaningco/?igsh=NnVtY2kyeTN3bHVm">
                <IconButton
                  icon={<FontAwesomeIcon icon={faInstagram} />}
                  aria-label="Instagram"
                  colorScheme="blue"
                />
              </a>
              <a href="https://www.facebook.com/israelcarpetcleaning?mibextid=LQQJ4d">
                <IconButton
                  icon={<FontAwesomeIcon icon={faFacebook} />}
                  aria-label="Facebook"
                  colorScheme="blue"
                />
              </a>
              <a href="https://www.yelp.com/your-business">
                <IconButton
                  icon={<FontAwesomeIcon icon={faYelp} />}
                  aria-label="Yelp"
                  colorScheme="red"
                />
              </a>
              <a href="https://www.linkedin.com/in/cerod">
                <IconButton colorScheme="blue" mr={4}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />      
                </IconButton>
              </a>
            </HStack>
            {/* Email and LinkedIn links */}
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
