import { Box, Text, IconButton, Button } from "@chakra-ui/react";
import useMusic from "../Hooks/useMusic";
import { BsFillPlayCircleFill, BsFillPauseBtnFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';
import { useState, useEffect } from "react";



export const Main = () => {
    const musics = useMusic();
    






    return (

        <Box bg='#c21d1d' w='70%'  p={10} color='white' borderRadius='10px' borderWidth={2} pos="absolute" top={110} right={30}>

            <Text>Playing Now</Text>

            {!musics.isPlaying ?
                <Text> - </Text> :
                <p>{musics.crrMusicName}</p>
            }


            {/* {musics.audioPlayer.duration}

            {musics.audioPlayer.currentTime}

            <Slider aria-label='slider-ex-1' defaultValue={0} value={musics.audioPlayer.currentTime}  >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
 */}



            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <div style={{

                    //    marginLeft:"auto",
                    //    marginRight: "auto",
                    //    marginBottom: "auto"
                    margin: "auto",

                    justifyContent: "space-around"

                }}>
                    <button onClick={musics.skipPrevious}>
                        {<BiSkipPrevious />}
                    </button>
                    {musics.isPlaying ?
                        <button onClick={musics.startStop}>
                            {<BsFillPlayCircleFill />}
                        </button> :
                        <button onClick={musics.startStop}>
                            {<BsFillPauseBtnFill />}
                        </button>
                    }

                    <button onClick={musics.skipNext}>
                        {<BiSkipNext />}
                    </button>
                </div>
            </IconContext.Provider>









        </Box >
    )


}
export default Main;