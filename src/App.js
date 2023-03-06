import Header from './Components/Header';
import React, { useState } from 'react';
import { MusicContext } from "../src/Context/MusicContext"

import './App.css';
import Navigator from './Components/Navigator';
import Footer from './Components/Footer';

import Orochimaru from "../src/Assests/Orochimaru's Full Theme.mp3";
import Betrayal from "../src/Assests/Betrayal.mp3";
import Itachi from "../src/Assests/Itachi Theme.mp3";
import NarutoMain from "../src/Assests/Naruto Main Theme.mp3";
import Saika from "../src/Assests/Naruto-Saika.mp3"
import Main from './Components/Main';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';


function App() {

  const [musics, setMusics] = useState({
    audioPlayer: new Audio(),
    allMusics: [
      {
        name: "Orochimaru",
        file: Orochimaru
      },
      {
        name: "Betrayal",
        file: Betrayal
      },
      {
        name: "Itachi Theme",
        file: Itachi
      },
      {
        name: "Naruto-Saika",
        file: Saika
      },
      {
        name: "Naruto- Main Theme",
        file: NarutoMain
      }

    ],
    crrIndex: null,
    isPlaying: false,
  })




  return (
    <div className="App">
      <ChakraProvider>
      <MusicContext.Provider value={[musics, setMusics]}>
      
       <Header />
        <Navigator />
       <Main />
        <Footer />
      
      </MusicContext.Provider>
      </ChakraProvider>

    </div>
  );
}

export default App;
