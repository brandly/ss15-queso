/** @jsx REACT.DOM */
import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="control-panel">
        <p>{this.props.track ? this.props.track.title : 'CONTROL PANEL'}</p>
      </div>
    );
  }
});
