/** @jsx REACT.DOM */
import React from 'react';
import cuid from 'cuid';

export default React.createClass({

  render: function () {
    return (
      <div ref="keyboard" className="piano-keyboard"></div>
    );
  },

  componentDidMount: function() {
    let keyboardEl = this.refs.keyboard.getDOMNode();
    keyboardEl.id = cuid();
    this.hancock = new QwertyHancock({
      id: keyboardEl.id,
      width: window.innerWidth * 0.9,
      height: 150,
      octaves: Math.round(window.innerWidth / 400),
      startNote: 'C3',
      whiteNotesColour: 'white',
      blackNotesColour: 'black',
      hoverColour: '#f3e939'
    });

    let currentlyPlaying = {};
    this.hancock.keyDown = (note, frequency) => {
      currentlyPlaying[note] = this.props.queso.play({ frequency });
    };
    this.hancock.keyUp = function(note) {
      currentlyPlaying[note].stop();
      delete currentlyPlaying[note];
    };

  },

});
