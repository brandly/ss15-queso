/** @jsx REACT.DOM */
import React from 'react';

export default React.createClass({

  render: function () {
    const styles = {
      left: `${this.props.queso.currentTime * 100}%`
    };
    return (
      <div className="current-time-bar" style={styles}></div>
    );
  }

});
