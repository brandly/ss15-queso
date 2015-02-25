/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';
import Track from '../models/track';
import CurrentTimeBar from './current-time-bar';
import keymaster from 'keymaster';

export default React.createClass({
  componentWillMount: function () {
    this.props.queso.on('TRACK_SELECTED', this._onChange);
    this.props.queso.on('TRACK_ADDED', this._onChange);
    this.props.queso.on('TRACK_CHANGED', this._onChange);

    keymaster('shift+t', this.addTrack);
  },

  listenForNoteAdded: function (track) {
    track.on('NODE_ADDED', this._onChange);
  },

  getTracks: function () {
    var {tracks, selectedTrack} = this.props.queso;
    return {tracks, selectedTrack};
  },

  getInitialState: function () {
    return this.getTracks();
  },

  addTrack: function () {
    const track = new Track({ queso: this.props.queso });
    this.props.queso.addTrack(track);
  },

  _onChange: function () {
    this.setState(this.getTracks());
  },

  selectTrack: function (track) {
    this.props.queso.selectTrack(track);
  },

  render: function () {
    const trackElements = this.state.tracks.map((t, i) => {
      const classes = classSet({
        'track': true,
        'is-recording': t.isRecording,
        'track-selected': this.state.selectedTrack && (t.id === this.state.selectedTrack.id)
      });

      const sounds = t.recordings.map((r, i) => {
        const style = {
          position: 'absolute',
          top: 0,
          left: r.startTime * 100 + '%',
          right: 100 - r.endTime * 100 + '%',
          height: '10px',
          backgroundColor: '#5B5268'
        };

        return (
          <div style={style} key={i}></div>
        );
      });

      return (
        <div className={classes} key={i} onClick={this.selectTrack.bind(this, t)}>
          <div className="track-sounds">
            {sounds}

            <div className="bar first-bar"></div>
            <div className="bar second-bar"></div>
            <div className="bar third-bar"></div>
          </div>
          <div className="track-info">
            <div className="track-info-title">{t.instrument.shape}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="track-list">
        <div className="the-tracks">
          <CurrentTimeBar queso={this.props.queso} />
          {trackElements}
        </div>
        <a href="#" className="add-track" onClick={this.addTrack}>
          <div className="add-track-inner">New Track</div>
        </a>

      </div>
    );
  }
});
