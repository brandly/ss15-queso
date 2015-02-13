/** @jsx REACT.DOM */
import React from 'react';
import PianoKeyboard from './piano-keyboard';
import MicRecorder from './mic-recorder';
import SynthShape from './synth-shape';

export default React.createClass({
  render: function () {

    const trackType = this.props.track ? this.props.track.type : null;
    const isMIDI = trackType === 'MIDI';

    return (
      <div className="control-panel">
        <PianoKeyboard track={this.props.track} queso={this.props.queso} />
        <SynthShape track={this.props.track} queso={this.props.queso} />
      </div>
    );

  }
});
