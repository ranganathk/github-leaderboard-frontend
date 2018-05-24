import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  select: {
    padding: '5px',
    marginLeft: '5px',
    backgroundColor: 'transparent',
    color: '#337ab7',
    border: 'none',
    fontWeight: 'bold'
  },
  option: {}
};

export default class SelectTimePeriod extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.props.updateTimePeriod(event.target.value);
  }

  render() {
    return (
      <select
        value={this.props.timePeriod}
        onChange={this.handleChange}
        style={styles.select}
      >
        <option value="WEEK">Week</option>
        <option value="MONTH">Month</option>
        <option value="ALL">All</option>
      </select>
    );
  }
}

SelectTimePeriod.propTypes = {};
