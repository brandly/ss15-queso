/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';

export default React.createClass({
  componentWillMount: function () {
    this.props.queso.on('TRACK_SELECTED', this._onChange);
    this.props.queso.on('TRACK_ADDED', this._onChange);
  },

  getTracks: function () {
    var {tracks, selectedTrack} = this.props.queso;
    return {tracks, selectedTrack};
  },

  getInitialState: function () {
    return this.getTracks();
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
        'track-selected': this.state.selectedTrack && (t.id === this.state.selectedTrack.id)
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
        {trackElements}
      </div>
    );
  }
});
