/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';
import Track from '../models/track';
import keymaster from 'keymaster';

export default React.createClass({
  componentWillMount: function () {
    this.props.queso.on('TRACK_SELECTED', this._onChange);
    this.props.queso.on('TRACK_ADDED', this._onChange);

    keymaster('shift+t', this.addTrack);
  },

  getTracks: function () {
    var {tracks, selectedTrack} = this.props.queso;
    return {tracks, selectedTrack};
  },

  getInitialState: function () {
    return this.getTracks();
  },

  addTrack: function () {
    const track = new Track({
      title: 'Track ' + (this.props.queso.tracks.length + 1)
    });
    this.props.queso.addTrack(track);
  },

  _onChange: function () {
    this.setState(this.getTracks());
  },

  selectTrack: function (track) {
    this.props.queso.selectTrack(track);
  },

  render: function () {
    var trackElements = this.state.tracks.map((t, i) => {
      var classes = classSet({
        'track': true,
        'is-recording': t.isRecording,
        'track-selected': this.state.selectedTrack && (t.id === this.state.selectedTrack.id)
      });

      return (
        <div className={classes} key={i} onClick={this.selectTrack.bind(this, t)}>
          <div className="track-sounds"></div>
          <div className="track-info">
            <div className="track-info-title">{t.title}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="track-list">
        {trackElements}
        <a href="#" className="add-track" onClick={this.addTrack}>
          <div className="add-track-inner">New track</div>
        </a>
      </div>
    );
  }
});
