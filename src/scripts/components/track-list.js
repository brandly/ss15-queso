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
    this.props.queso.addTrack(new Track({title: 'wahhh'}));
  },

  _onChange: function () {
    this.setState(this.getTracks());
  },

  selectTrack: function (track) {
    this.props.queso.selectTrack(track);
  },

  toggleRecording: function () {
    // call this on next tick because the event that calls
    // selectTrack fires AFTER this one does
    process.nextTick(() => {
      this.props.queso.tracks.forEach(track => {
        if (track === this.props.queso.selectedTrack) {
          track.toggleRecording();
        } else {
          track.isRecording = false;
        }
      });
      this._onChange();
    });
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
          <div className="track-sounds">bllksjdlkfjs</div>
          <div className="track-info">
            <div className="track-info-title">{t.title}</div>
            <a href="javascript:void 0" onClick={this.toggleRecording}>record</a>
          </div>
        </div>
      );
    });

    return (
      <div className="track-list">
        {trackElements}
        <a href="#" className="add-track" onClick={this.addTrack}>
          <div class="add-track-inner">New track</div>
        </a>
      </div>
    );
  }
});
