/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';

export default React.createClass({
  componentWillMount: function () {
    this.state.queso.on('STATE_CHANGED', this._onChange);
  },

  getInitialState: function () {
    return {queso: this.props.queso};
  },

  _onChange: function () {
    this.setState({queso: this.props.queso});
  },

  play: function () {
    this.state.queso.setPlaying(true);
  },

  stop: function () {
    this.state.queso.setPlaying(false);
  },

  record: function () {
    const {queso} = this.state;
    queso.setRecording(!queso.isRecording);
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
        <button className="button" onClick={this.stop}>Stop</button>
        <button className={recordingClasses} onClick={this.record}>Record</button>
      </header>
    );
  }
});
