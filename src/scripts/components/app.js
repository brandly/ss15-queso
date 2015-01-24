/** @jsx REACT.DOM */
import React from 'react';
import TrackList from './track-list.js'
import ControlPanel from './control-panel'

export default React.createClass({
  render: function () {
    return (
      <div className="queso">
        <TrackList />
        <ControlPanel />
      </div>
    );
  }
});
