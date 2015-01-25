const time = require('../src/scripts/lib/timeconvert');

const assert = require('assert');
const equal = assert.equal;

describe('timeconvert', function() {

  it('converts percent to time', function() {
    equal(time.convert({ percent: 0, bpm: 100 }), 0);
    equal(time.convert({ percent: 0, bpm: 60 }), 0);
    equal(time.convert({ percent: 0.5, bpm: 100 }), 4800);
    equal(time.convert({ percent: 0.5, bpm: 60 }), 8000);
    equal(time.convert({ percent: 1, bpm: 100 }), 9600);
    equal(time.convert({ percent: 1, bpm: 60 }), 16000);
  });

  it('converts time to percent', function() {
    equal(time.convert({ ms: 0, bpm: 100 }), 0);
    equal(time.convert({ ms: 0, bpm: 60 }), 0);
    equal(time.convert({ ms: 4800, bpm: 100 }), 0.5);
    equal(time.convert({ ms: 8000, bpm: 60 }), 0.5);
    equal(time.convert({ ms: 9600, bpm: 100 }), 1);
    equal(time.convert({ ms: 16000, bpm: 60 }), 1);
  });

});
