/** @jsx REACT.DOM */
import React from 'react';
import cuid from 'cuid';

export default React.createClass({
  componentDidMount: function() {
    let keyboardEl = this.refs.keyboard.getDOMNode();
    keyboardEl.id = cuid();
    this.hancock = new QwertyHancock({
      id: keyboardEl.id,
      width: 600,
      height: 150,
      octaves: 2,
      startNote: 'A3',
      whiteNotesColour: 'white',
      blackNotesColour: 'black',
      hoverColour: '#f3e939'
    });
    setTimeout(() => {
      console.log('widening');
      this.hancock.width = 700;
    }, 5000);
  },
  render: function () {
    return (
      <div ref="keyboard" className="piano-keyboard">TODO keyboard goes here</div>
    );
  }
});
