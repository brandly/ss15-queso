/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';

var tracks = [{
  id: 0,
  title: 'fire',
  type: 'MIDI'
}, {
  id: 1,
  title: 'beats',
  type: 'AUDIO'
}];
var selectedTrack = {};

function getTracks () {
  return {
    tracks: tracks,
    selectedTrack: selectedTrack
  };
}

export default React.createClass({
  componentWillMount: function () {

  },

  getInitialState: function () {
    return getTracks();
  },

  _onChange: function () {
    this.setState(getTracks());
  },

  addTrack: function () {
    tracks.push({id: tracks.length, title: 'wahhh', type: 'MIDI'});
    this._onChange();
  },

  selectTrack: function (track) {
    selectedTrack = track;
    this._onChange();
  },

  render: function () {
    var trackElements = this.state.tracks.map((t, i) => {
      var classes = classSet({
        'track': true,
        'track-selected': t.id === this.state.selectedTrack.id
      });

      return (
        <div className={classes} key={i} onClick={this.selectTrack.bind(this, t)}>
          <div className="track-sounds">bllksjdlkfjs</div>
          <div className="track-info">{t.title}</div>
        </div>
      );
    });

    return (
      <div className="track-list">
        <button onClick={this.addTrack}>Add Track</button>
        {trackElements}
      </div>
    );
  }
});
