import { Box, Text } from '@chakra-ui/react'


export const Header = () => {
    return (
        <Box
            bg='tomato'
            w='100%' 
            p={4} 
            color='white'
            gridArea='header'
            borderBottom='3px'
            borderColor='black'
            fontSize='md'
           
        >
            <Text fontSize='md'> LightOfGod Simple Music App</Text>
        </Box>
    )
}
export default Header;