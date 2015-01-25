/** @jsx REACT.DOM */
import React from 'react';
import getUserMedia from 'getusermedia';

function getAudio(callback) {
  return getUserMedia({ video: false, audio: true }, callback);
}

export default React.createClass({
  recordPressed: function () {
    if (this.recorder) {
      this.stopRecording();
      delete this.recorder;
    } else {
      this.startRecording();
    }
  },
  startRecording: function () {
    getAudio((err, stream) => {
      if (err) { throw err; } // TODO better handling of this
      let input = tsw.context().createMediaStreamSource(stream);
      this.recorder = new Recorder(input, {
        workerPath: 'vendor/recorder-worker.js'
      });
    });
  },
  stopRecording: function () {
    this.recorder.getBuffer(buffers => {
      /* TODO: save this. something like this example:
    var newSource = audioContext.createBufferSource();
    var newBuffer = audioContext.createBuffer( 2, buffers[0].length, audioContext.sampleRate );
    newBuffer.getChannelData(0).set(buffers[0]);
    newBuffer.getChannelData(1).set(buffers[1]);
    newSource.buffer = newBuffer;

    newSource.connect( audioContext.destination );
    newSource.start(0);
      */
    });
  },
  record: function () {
    if (this.recorder) {
    } else {
    }
  },
  render: function () {
    return (
      <a href="#" className="record" onClick={this.recordPressed}>
      	record real life audio
      </a>
    );
  }
});

