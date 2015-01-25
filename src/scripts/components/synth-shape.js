/** @jsx REACT.DOM */
import React from 'react';
import {classSet} from 'react-addons';

export default React.createClass({
  componentWillMount: function () {
  },

  getInitialState: function () {
    return {};
  },

  _onChange: function () {
    this.setState({});
  },

  render: function () {
    const shapes = this.props.track.instrument.getShapes();
    const elements = shapes.map((shape, i) => {
      return (
        <div className="shape" key={i}>
          <label>{shape}</label>
          <input type="radio" />
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
