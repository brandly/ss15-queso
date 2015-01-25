/** @jsx REACT.DOM */
import React from 'react';
import PianoKeyboard from './piano-keyboard';

export default React.createClass({
  render: function () {

    const trackTitle = this.props.track ? this.props.track.title : 'CONTROL PANEL';
    const trackType = this.props.track ? this.props.track.type : null;
    const showKeyboard = trackType === 'MIDI';

    return (
      <div className="control-panel">
        <p>{trackTitle}</p>
        {showKeyboard ? <PianoKeyboard /> : ''}
      </div>
    );

  }
});
