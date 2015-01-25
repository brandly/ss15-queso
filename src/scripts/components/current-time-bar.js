/** @jsx REACT.DOM */
import React from 'react';

export default React.createClass({

  getInitialState: function () {
    return {currentTime: this.props.queso.currentTime};
  },

  _onChange: function () {
    return this.setState({
      currentTime: this.props.queso.currentTime
    });
  },

  componentWillMount: function () {
    this.props.queso.on('CURRENT_TIME_CHANGED', this._onChange);
  },

  render: function () {
    const styles = {
      left: `${this.state.currentTime * 100}%`
    };
    console.log(styles.left);
    return (
      <div className="current-time-bar" style={styles}></div>
    );
  }

});
