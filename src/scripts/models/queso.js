import EventEmitter from 'events';

export default class Queso extends EventEmitter {
  constructor(opts) {
    this.tracks = [];
    this.selectedTrack = null;
  }

  addTrack(track) {
    this.tracks.push(track);
    this.emit('TRACK_ADDED', track);
  }

  selectTrack(track) {
    this.selectedTrack = track;
    this.emit('TRACK_SELECTED', this.selectedTrack);
  }
}
