const minToMS = 16 * 60 * 1000;

let timeconvert = {

  convert: function convert(options) {
    const { percent, ms, bpm } = options;
    if (typeof percent !== 'undefined') {
      return percent * minToMS / bpm;
    } else {
      return ms * bpm / minToMS;
    }
  }

};

module.exports = timeconvert;
