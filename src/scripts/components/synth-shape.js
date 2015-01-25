/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';

export default React.createClass({
  componentWillMount: function () {
  },

  getInitialState: function () {
    return {track: this.props.track};
  },

  _onChange: function () {
    this.setState({track: this.props.track});
  },

  setShape: function (shape) {
    this.props.track.instrument.setShape(shape);
    this._onChange();
  },

  render: function () {
    const shapes = this.props.track.instrument.getShapes();
    const elements = shapes.map((shape, i) => {
      const id = 'shape-' + shape;
      return (
        <div className="shape" key={i}>
          <input id={id} type="radio" checked={shape === this.props.track.instrument.shape} onChange={this.setShape.bind(this, shape)} />
          <label htmlFor={id}>{shape}</label>
        </div>
      );
    });

    return (
      <div className="synth-shapes">
        {elements}
      </div>
    );
  }
});
