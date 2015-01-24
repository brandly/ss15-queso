/** @jsx REACT.DOM */
import React from 'react';
import Track from '../models/track';

export default React.createClass({
  addTrack: function () {
    this.props.queso.addTrack(new Track({title: 'wahhh'}));
  },

  render: function () {
    return (
      <header className="header">
        <button className="button" onClick={this.addTrack}>Add Track</button>
      </header>
    );
  }
});
