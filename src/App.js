import React, { useState, StyleSheet } from "react";
import "./App.css";

const data = [
  {
    letter: "Q",
    id: "quail", // ορτύκι
    url: "http://www.naturesongs.com/quail1.wav"
  },
  {
    letter: "W",
    id: "waxing", // ...
    url: "http://www.birds-of-denmark.dk/Sounds/Bombycilla.garrulus.wav"
  },
  {
    letter: "E",
    id: "eagle", //
    url: "http://www.falknatur.se/sound/Hieraaetus.pennatus.wav"
  },
  {
    letter: "A",
    id: "albatross",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Schwarzbrauenalbatros_Diomedea_melanophris_R_AMPLE-E0114.mp3"
  },
  {
    letter: "S",
    id: "sandpiper",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Terekwasserlaeufer_Xenus_cinereus_G_AMPLE-E0574.mp3"
  },
  {
    letter: "D",
    id: "dove",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Turteltaube_Streptopelia_turtur_G_AMPLE-E07651R.mp3"
  },
  {
    letter: "Z",
    id: "zebra-finch",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Zebrafink_Taeniopygia_guttata_AMPLE-814752D.mp3"
  },
  {
    letter: "X",
    id: "star-wars-x-wing",
    url: "http://www.foxysite.de/StarWars/X-Wing%20Fighter%201.wav"
  },
  {
    letter: "C",
    id: "canary",
    url: "http://www.animal-sounds.org/Air/Canary%20trills%20animals011.wav"
  }
];

const DrumPad = props => {
  return (
    <button
      className='drum-pad'
      id={props.id}
      onClick={props.onClick}
    >
      {props.letter}
    </button>
  );
};




function App() {
const [sound, setSound ] = useState('')
const handleClick = (letter) => {

  setSound(letter)
}
  return (
    <div style={styles.container} >
      {/* <h1>Drum machine</h1> */}
      <div id="drum-machine">
        <div id="display">
          <strong style={{ letterTransform: "capitalize" }}>{sound}</strong>
        </div>
        <div style={styles.container}>
        {data.map((pad, i) => (
          <DrumPad
            key={pad.id + i}
            id={pad.id}
            letter={pad.letter}
            onClick={() => handleClick(pad.letter)}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

const styles = (StyleSheet = {
  container: {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
