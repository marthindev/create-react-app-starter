import React, { Component } from "react";
import "./App.css";
import ReactHowler from "react-howler";
import raf from "raf";

const markers = [2, 4, 6];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      loaded: false,
      loop: false,
      mute: false,
      volume: 1.0,
      action: "none"
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
  }

  componentWillUnmount() {
    this.clearRAF();
  }

  clearRAF() {
    raf.cancel(this._raf);
  }

  handleToggle() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
  }

  handleOnPlay() {
    this.setState({
      playing: true
    });
    this.renderSeekPos();
  }

  handleOnEnd() {
    this.setState({
      playing: false
    });
    this.clearRAF();
  }

  handleStop() {
    this.player.stop();
    this.setState({
      playing: false // Need to update our local state so we don't immediately invoke autoplay
    });
    this.renderSeekPos();
  }

  handleLoopToggle() {
    this.setState({
      loop: !this.state.loop
    });
  }

  handleMuteToggle() {
    this.setState({
      mute: !this.state.mute
    });
  }
  renderSeekPos() {
    const seek = Math.round(this.player.seek());
    if (markers.includes(seek)) {
      this.setState({
        seek,
        action: seek
      });
    } else {
      this.setState({
        seek
      });
    }
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Audio Marker demo</h1>
          <p>Reached marker: {this.state.action}</p>
          <p>
            <h4>{"Audio current position / total duration: "}</h4>
            {this.state.seek !== undefined
              ? this.state.seek.toFixed(2)
              : "0.00"}
            {" / "}
            {this.state.duration ? this.state.duration.toFixed(2) : "NaN"}
          </p>
          <ReactHowler
            src={["sound.mp3", "sound.ogg"]}
            playing={this.state.playing}
            onLoad={this.handleOnLoad}
            onPlay={this.handleOnPlay}
            onEnd={this.handleOnEnd}
            ref={ref => (this.player = ref)}
          />
          <div>
            <button onClick={this.handleToggle}>
              {this.state.playing ? "Pause" : "Play"}
            </button>
            <button onClick={this.handleStop}>Stop</button>
          </div>
          <h4>Markers set on {`${markers}`}</h4>
        </header>
      </div>
    );
  }
}

export default App;
