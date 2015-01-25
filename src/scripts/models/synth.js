
// TODO: should we have like an instrument abstract base class or something?
// i'm just exploring at this point

const validShapes = ['sine', 'square', 'triangle', 'sawtooth'];

export default class Synth {
  constructor(opts) {
    this.shape = opts.shape || 'sine';
  }

  // return a node that'll plugin to tsw stuff
  getNode(frequency) {
    return tsw.osc(frequency, this.shape);
  }

  getShapes() {
    return validShapes;
  }

  setShape(shape) {
    if (validShapes.indexOf(shape) > -1) {
      this.shape = shape;
    }
  }
}
