
// TODO: should we have like an instrument abstract base class or something?
// i'm just exploring at this point

export default class Synth {
  constructor(opts) {
    this.oscillator = tsw.osc();
  }

  // return a node that'll plugin to tsw stuff
  getNode() {
    return this.oscillator;
  }
}
