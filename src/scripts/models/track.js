import EventEmitter from 'events';
import Synth from './synth';

export default class Track extends EventEmitter {
  constructor(opts) {
    this.id = opts.id || Date.now();
    this.title = opts.title || '';
    this.type = opts.type || 'MIDI';

    this.recordings = opts.recordings || [];
    this.instrument = opts.instrument || new Synth();
    // pass in a gain value on creation, or not
    this.gain = tsw.gain(opts.gain || 1.0);
  }

  connect() {
    if (this.instrument) {
      tsw.connect(this.instrument.getNode(), this.gain, tsw.speakers);
    }
  }
}
