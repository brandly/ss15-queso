import EventEmitter from 'events';

export default class Queso extends EventEmitter {
  constructor(opts = {}) {
    this.tracks = [];
    this.selectedTrack = null;
    this.isPlaying = false;
    this.isRecording = false;
    this.bpm = opts.bpm || 120;
  }

  addTrack(track) {
    this.tracks.push(track);
    this.emit('TRACK_ADDED', track);
    this.selectTrack(track);
  }

  selectTrack(track) {
    if (this.selectedTrack) {
      this.selectedTrack.isRecording = false;
    }
    this.selectedTrack = track;
    this.emit('TRACK_SELECTED', this.selectedTrack);
  }

  setPlaying(playing) {
    if (!playing) {
      // stop playing, stop recording too
      this.isRecording = false;
    }
    this.isPlaying = playing;
    this.emit('STATE_CHANGED');
  }

  setRecording(recording) {
    if (recording) {
      // start recording, start playing too
      this.isPlaying = true;
    }
    this.isRecording = recording;
    if (this.selectedTrack) {
      this.selectedTrack.isRecording = this.isRecording;
    }
    this.emit('STATE_CHANGED');
  }

  setBpm(bpm) {
    this.bpm = bpm;
    this.emit('STATE_CHANGED');
  }
}
