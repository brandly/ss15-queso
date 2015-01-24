/** @jsx REACT.DOM */
import React from 'react';
import TrackList from './tracklist.js'

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>Queso</h1>
        <TrackList />
      </div>
    )
  }
});
