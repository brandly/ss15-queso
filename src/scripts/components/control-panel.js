/** @jsx REACT.DOM */
import React from 'react';
import PianoKeyboard from './piano-keyboard';
import MicRecorder from './mic-recorder';

export default React.createClass({
  render: function () {

    const trackTitle = this.props.track ? this.props.track.title : 'CONTROL PANEL';
    const trackType = this.props.track ? this.props.track.type : null;
    const isMIDI = trackType === 'MIDI';

    return (
      <div className="control-panel">
        <p>{trackTitle}</p>
        {isMIDI ?
          <PianoKeyboard track={this.props.track} /> :
          <MicRecorder track={this.props.track} />}
      </div>
    );

  }
});
