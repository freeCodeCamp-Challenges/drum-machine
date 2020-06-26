import React, {  } from "react";
import "./App.css";

const data = [
  {
    text: 'Q',
    id: 'quail', // ορτύκι
    url: 'http://www.naturesongs.com/quail1.wav',
  },
  {
    text: 'W',
    id: 'waxing', // ...
    url: 'http://www.birds-of-denmark.dk/Sounds/Bombycilla.garrulus.wav',
  },
  {
    text: 'E',
    id: 'eagle', // 
    url: 'http://www.falknatur.se/sound/Hieraaetus.pennatus.wav',
  },
  {
    text: 'A',
    id: 'albatross', 
    url: 'https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Schwarzbrauenalbatros_Diomedea_melanophris_R_AMPLE-E0114.mp3',
  },
  {
    text: 'S',
    id: 'sandpiper', 
    url: 'https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Terekwasserlaeufer_Xenus_cinereus_G_AMPLE-E0574.mp3',
  },
  {
    text: 'D',
    id: 'dove', 
    url: 'https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Turteltaube_Streptopelia_turtur_G_AMPLE-E07651R.mp3',
  },
  {
    text: 'Z',
    id: 'zebra-finch', 
    url: 'https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Zebrafink_Taeniopygia_guttata_AMPLE-814752D.mp3',
  },
  {
    text: 'X',
    id: 'star-wars-x-wing', 
    url: 'http://www.foxysite.de/StarWars/X-Wing%20Fighter%201.wav',
  },
  {
    text: 'C',
    id: 'canary', 
    url: 'http://www.animal-sounds.org/Air/Canary%20trills%20animals011.wav',
  },
]

const drumPad = (props) => {
  return (
    <div className='dram-pad'>

    </div>
  )
}

function App() {
  return (
    <div style={styles.container} className="App">
      <h1>Drum machine</h1>
      <div id='drum-machine'>
        <div id='display'></div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
} 

export default App;
