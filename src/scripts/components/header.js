/** @jsx REACT.DOM */
import React from 'react';

export default React.createClass({
  addTrack: function () {
    this.props.queso.addTrack(new Track({title: 'wahhh'}));
  },

  render: function () {
    return (
      <header className="header">
        {
          // TODO: probably use some icons
        }
        <button className="button" onClick={this.play}>Play</button>
        <button className="button" onClick={this.stop}>Stop</button>
        <button className="button" onClick={this.record}>Record</button>
      </header>
    );
  }
});
