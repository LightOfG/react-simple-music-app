import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={24}
          
          
          alignSelf='baseline'
        >
          <p>LightOfGod • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
