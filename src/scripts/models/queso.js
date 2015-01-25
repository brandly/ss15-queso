import EventEmitter from 'events';
const time = require('../lib/timeconvert');

const PLAY_INTERVAL = 100; // TODO shorten

export default class Queso extends EventEmitter {
  constructor(opts = {}) {
    this.tracks = [];
    this.selectedTrack = null;
    this.isPlaying = false;
    this.isRecording = false;
    this.bpm = opts.bpm || 120;
    this.currentTime = 0;
  }

  addTrack(track) {
    this.tracks.push(track);
    this.emit('TRACK_ADDED', track);
    this.selectTrack(track);
  }

  selectTrack(track) {
    this.selectedTrack = track;
    this.emit('TRACK_SELECTED', this.selectedTrack);
  }

  setPlaying(playing) {
    if (playing) {
      this.playingInterval = setInterval(() => {
        const step = time.convert({
          bpm: this.bpm,
          ms: PLAY_INTERVAL
        });
        this.currentTime = (this.currentTime + step) % 1;
        this.emit('CURRENT_TIME_CHANGED');
      }, PLAY_INTERVAL);
    } else {
      // stop playing, stop recording too
      this.isRecording = false;
      clearInterval(this.playingInterval);
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
    this.emit('STATE_CHANGED');
  }

  setBpm(bpm) {
    this.bpm = bpm;
    this.emit('STATE_CHANGED');
  }

  play(args) {
    if (this.selectedTrack) {
      const method = this.isRecording ? 'record' : 'play';
      return this.selectedTrack[method]({
        frequency: args.frequency,
        time: this.currentTime
      });
    }
  }
}
