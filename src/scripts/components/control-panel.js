/** @jsx REACT.DOM */
import React from 'react';

export default React.createClass({
  render: function () {

    const trackTitle = this.props.track ? this.props.track.title : 'CONTROL PANEL';

    return (
      <div className="control-panel">
        <p>{trackTitle}</p>
      </div>
    );

  }
});
