import EventEmitter from 'events';
import Synth from './synth';

export default class Track extends EventEmitter {
  constructor(opts) {
    this.id = opts.id || Date.now();
    this.title = opts.title || '';
    this.type = opts.type || 'MIDI';

    this.isRecording = opts.isRecording || false;
    this.recordings = opts.recordings || [];
    this.instrument = opts.instrument || new Synth();
    // pass in a gain value on creation, or not
    this.gain = tsw.gain(opts.gain || 1.0);
    this.panner = tsw.panner(opts.panner || 0);
  }

  toggleRecording() {
    this.isRecording = !this.isRecording;
  }

  play(args) {
    var {frequency} = args;
    var node = this.instrument.getNode(frequency);
    tsw.connect(node, this.panner, this.gain, tsw.speakers);
    node.start();

    if (this.isRecording) {
      this.record(args);
    }

    return {
      stop: function () {
        node.stop();
        // clean up recording and stuff
      }
    };
  }

  record(args) {
    this.recordings.push({
      frequest: args.frequency,
      time: args.time // this should come from some playback head
    });
    // emit something?
  }
}
