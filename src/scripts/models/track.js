import EventEmitter from 'events';

export default class Track extends EventEmitter {
  constructor(opts) {
    this.id = opts.id || Date.now();
    this.title = opts.title || '';
    this.type = opts.type || 'MIDI';
    this.recordings = opts.recordings || [];
    this.instrument = opts.instrument || null;
  }
}
