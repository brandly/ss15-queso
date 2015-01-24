
export default function track (opts) {
  this.id = opts.id || Date.now();
  this.title = opts.title || '';
  this.type = opts.type || 'MIDI';
  this.recordings = opts.recordings || [];
  this.instrument = opts.instrument || null;
}
