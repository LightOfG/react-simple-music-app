import { Box, VStack, Text, Button } from '@chakra-ui/react'
import useMusicPlayer from '../Hooks/useMusic'

export const Navigator = () => {


    const musics = useMusicPlayer();

    return (
        <Box bg='aqua'
            h='100%'
           
            width={240}
            mt={0}
            
            borderRight='3px'
            
          
            
        >
            {
                musics.allMusics.map((music, ind) => {
                    return (
                        <VStack key={music.name} spacing={2}>
                            <Button colorScheme='teal' variant='outline' onClick={()=>musics.playTrack(ind)} m={10}  borderRadius='4px'>
                                {music.name}
                            </Button>
                        </VStack>
                    )
                })
            }

        </Box>
    )
}
export default Navigator;