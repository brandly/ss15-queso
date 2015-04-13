/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';
import keymaster from 'keymaster';

export default React.createClass({
  componentWillMount: function () {
    this.state.queso.on('STATE_CHANGED', this._onChange);
    keymaster('space', this.onSpace);
  },

  getInitialState: function () {
    return {queso: this.props.queso};
  },

  _onChange: function () {
    this.setState({queso: this.props.queso});
  },

  onSpace: function (event) {
    event.preventDefault();
    this.togglePlayback();
  },

  play: function () {
    this.state.queso.setPlaying(true);
  },

  stop: function () {
    this.state.queso.setPlaying(false);
  },

  togglePlayback: function () {
    const {queso} = this.state;
    queso.setPlaying(!queso.isPlaying);
  },

  record: function () {
    const {queso} = this.state;
    queso.setRecording(!queso.isRecording);
  },

  lastTap: null,
  tapBpm: function () {
    const tapTime = tsw.context().currentTime;
    if (this.lastTap) {
      const difference = tapTime - this.lastTap;

      if (difference < 2) {
        this.state.queso.setBpm(Math.round(60 / difference));
      }
    }
    this.lastTap = tsw.context().currentTime;
  },

  toBeginning: function () {
    this.state.queso.setCurrentTime(0);
  },

  render: function () {
    const {queso} = this.state;

    const playingClasses = classSet({
      'button': true,
      'active': queso.isPlaying
    });

    const recordingClasses = classSet({
      'button': true,
      'active': queso.isRecording
    });

    return (
      <header className="header">
        {
          // TODO: probably use some icons
        }
        <button className={playingClasses} onClick={this.play}>Play</button>
        <button className="button" onClick={this.stop} onDoubleClick={this.toBeginning}>Stop</button>
        <button className={recordingClasses} onClick={this.record}>Record</button>

        <div className="header-right">
          <p className="bpm">{this.state.queso.bpm} BPM</p>
          <p className="bpm tap-bpm button" onClick={this.tapBpm}>Tap</p>
        </div>
      </header>
    );
  }
});
