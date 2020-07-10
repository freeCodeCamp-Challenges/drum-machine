import React, { useState, StyleSheet, useRef, useEffect } from "react";
import "./App.css";

const data = [
  {
    id: "Q",
    bird: "quail", // ορτύκι
    url: "http://www.naturesongs.com/quail1.wav"
  },
  {
    id: "W",
    bird: "waxing", // ...
    url: "http://www.birds-of-denmark.dk/Sounds/Bombycilla.garrulus.wav"
  },
  {
    id: "E",
    bird: "eagle", //
    url: "http://www.falknatur.se/sound/Hieraaetus.pennatus.wav"
  },
  {
    id: "A",
    bird: "albatross",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Schwarzbrauenalbatros_Diomedea_melanophris_R_AMPLE-E0114.mp3"
  },
  {
    id: "S",
    bird: "sandpiper",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Terekwasserlaeufer_Xenus_cinereus_G_AMPLE-E0574.mp3"
  },
  {
    id: "D",
    bird: "dove",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Turteltaube_Streptopelia_turtur_G_AMPLE-E07651R.mp3"
  },
  {
    id: "Z",
    bird: "zebra-finch",
    url:
      "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Zebrafink_Taeniopygia_guttata_AMPLE-814752D.mp3"
  },
  {
    id: "X",
    bird: "star-wars-x-wing",
    url: "https://www.vogelstimmen.info/Vogelstimmen_GRATIS/Wespenbussard_Pernis_apivorus_R_AMPLE-E0348R.mp3"
  },
  {
    id: "C",
    bird: "canary",
    url: "http://www.animal-sounds.org/Air/Canary%20trills%20animals011.wav"
  }
];

const DrumPad = props => {
  const audio = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    window.focus();

    return () => document.removeEventListener("keydown", handleKeydown);
  });

  const handleKeydown = event => {
    if (event.keyCode === props.id.charCodeAt()) {
      audio.current.play();
      audio.current.time = 0;
      return props.handleKeydown();
    } else {
      return true;
    }
  };

  const handleClick = event => {
    audio.current.play();
    audio.current.time = 0;
    return props.onClick();
  };

  return (
    <div className="drum-pad" id={props.id}>
      <button className="drum-pads" id={props.id} onClick={handleClick}>
        {props.id}
      </button>
      <audio
        ref={audio}
        className="clip"
        src={props.url}
        id={props.id}
      ></audio>
    </div>
  );
};

function App() {
  const [sound, setSound] = useState("");

  const handleClick = bird => {
    setSound(bird);
  };

  return (
    <div style={styles.container}>
      {/* <h1>Drum machine</h1> */}
      <div id="drum-machine">
        <div id="dspl">
          <strong id="display" style={{ letterTransform: "capitalize" }}>{sound}</strong>
        </div>
        <div style={styles.container}>
          {data.map((pad, i) => (
            <DrumPad
              key={pad.id + i}
              id={pad.id}
              url={pad.url}
              handleKeydown={() => handleClick(pad.bird)}
              onClick={() => handleClick(pad.bird)}
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
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
