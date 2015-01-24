/** @jsx REACT.DOM */
import React from 'react';
import TrackList from './track-list.js';
import ControlPanel from './control-panel';
import Queso from '../models/queso';

export default React.createClass({
  queso: new Queso(),

  componentWillMount: function () {
    this.queso.addTrack({
      id: 0,
      title: 'fire',
      type: 'MIDI'
    });
    this.queso.addTrack({
      id: 1,
      title: 'beats',
      type: 'AUDIO'
    });
  },

  getQueso: function () {
    return {queso: this.queso};
  },

  getInitialState: function () {
    return this.getQueso();
  },

  _onChange: function () {
    this.setState(this.getQueso());
  },

  render: function () {
    return (
      <div className="queso">
        <TrackList queso={this.state.queso} />
        <ControlPanel />
      </div>
    );
  }
});
