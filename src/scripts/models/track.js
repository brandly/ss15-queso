import EventEmitter from 'events';
import Synth from './synth';

export default class Track extends EventEmitter {
  constructor(opts) {
    this.queso = opts.queso;
    console.assert(this.queso);
    this.id = opts.id || Date.now();
    this.title = opts.title || '';
    this.type = opts.type || 'MIDI';

    this.recordings = opts.recordings || [];
    this.instrument = opts.instrument || new Synth();
    // pass in a gain value on creation, or not
    this.gain = tsw.gain(opts.gain || 1.0);
    this.panner = tsw.panner(opts.panner || 0);
  }

  play(args) {
    var {frequency} = args;
    const startTime = args.time;
    var node = this.instrument.getNode(frequency);
    tsw.connect(node, this.panner, this.gain, tsw.speakers);
    node.start();

    return {
      stop: () => {
        const endTime = this.queso.currentTime;
        node.stop();
        this.recordings.push({
          frequency: frequency,
          startTime, endTime
        });
      }
    };
  }

  record(args) {
    return this.play(args);
    // emit something?
  }
}
