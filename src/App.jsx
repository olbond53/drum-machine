import React from 'react';
import DrumPads from './components/DrumPads';
import Display from './components/Display';
import VolumeControl from './components/VolumeControl';
import './css/App.css';

const pads = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "Let's drum",
      volume: 50,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.playSound = this.playSound.bind(this);
    this.setId = this.setId.bind(this);
    this.volumeControl = this.volumeControl.bind(this);
  }

  handleClick(key, id) {
    const sound = document.getElementById(key);
    this.playSound(sound);
    this.setId(id);
  }

  handleKeyDown(event) {
    const { key, keyCode } = event;
    const padKey = pads.filter((pad) => pad.keyCode === keyCode);

    if (padKey.length !== 0 && padKey[0].key === key.toUpperCase()) {
      document.getElementById(padKey[0].id).classList.remove('not-active');
      document.getElementById(padKey[0].id).classList.add('active');
      const sound = document.getElementById(padKey[0].key);
      console.log(sound.volume);
      this.playSound(sound);
      this.setId(padKey[0].id);
    }
  }

  handleKeyUp(event) {
    const { key, keyCode } = event;
    const padKey = pads.filter((pad) => pad.keyCode === keyCode);
    if (padKey.length !== 0 && padKey[0].key === key.toUpperCase()) {
      document.getElementById(padKey[0].id).classList.remove('active');
      document.getElementById(padKey[0].id).classList.add('not-active');
    }
  }

  volumeControl(event) {
    const volumeValue = +event.target.value;
    this.setState({ volume: volumeValue });
  }

  playSound(s) {
    const playPromise = s.play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          s.pause();
          s.currentTime = 0;
          s.volume = this.state.volume / 100;
          s.play();
        })
        .catch(() => console.log('ERROR!'));
    }
  }

  setId(id) {
    this.setState({
      id: id,
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }
  render() {
    return (
      <div id="drum-machine">
        <DrumPads pads={pads} handleClick={this.handleClick} />
        <div id="controls">
          <Display id={this.state.id} />
          <VolumeControl handleInput={this.volumeControl} />
        </div>
      </div>
    );
  }
}

export default App;
