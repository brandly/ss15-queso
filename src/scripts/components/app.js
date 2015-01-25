/** @jsx REACT.DOM */
import React from 'react';
import Header from './header';
import TrackList from './track-list';
import ControlPanel from './control-panel';
import Queso from '../models/queso';
import Track from '../models/track';

export default React.createClass({
  queso: new Queso(),

  componentWillMount: function () {
    this.queso.addTrack(new Track({
      id: 0,
      title: 'fire',
      type: 'MIDI'
    }));

    this.queso.on('TRACK_SELECTED', this._onChange);
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
        <Header queso={this.state.queso} />
        <TrackList queso={this.state.queso} />
        <ControlPanel queso={this.state.queso} track={this.state.queso.selectedTrack} />
      </div>
    );
  }
});
