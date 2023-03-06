import { useContext } from "react"
import { MusicContext } from "../Context/MusicContext"


export const useMusic = () => {

    const [musics, setMusics] = useContext(MusicContext);

    function startStop() {
        if (musics.isPlaying) {
            musics.audioPlayer.pause();
        }
        else {
            musics.audioPlayer.play();
        }
        setMusics({ ...musics, isPlaying: !musics.isPlaying });
    }

    function playTrack(ind) {
        if (ind === musics.crrIndex) {
            startStop();
        }
        else {
            musics.audioPlayer.pause();
            musics.audioPlayer = new Audio(musics.allMusics[ind].file);
            //setMusics({...musics, audioPlayer: new Audio(musics.allMusics[ind].file)})
            musics.audioPlayer.play();
            setMusics({ ...musics, crrIndex: ind, isPlaying: true });

        }
    }

    function skipNext() {
        let tempIndex = null;
        musics.crrIndex === musics.allMusics.length - 1
            ? (tempIndex = 0)
            : (tempIndex = musics.crrIndex + 1);
        playTrack(tempIndex);
    }

    function skipPrevious() {
        let tempIndex = null;
        musics.crrIndex === musics.allMusics.length - 1
            ? (tempIndex = 0)
            : (tempIndex = musics.crrIndex - 1);
        playTrack(tempIndex);

    }

    return {
        playTrack,
        startStop,
        crrMusicIndex: musics.crrIndex,
        crrMusicName:
            musics.crrIndex !== null &&
            musics.allMusics[musics.crrIndex].name,
        allMusics: musics.allMusics,
        isPlaying: musics.isPlaying,
        skipPrevious,
        skipNext,
        audioPlayer: musics.audioPlayer
    };
};

export default useMusic;