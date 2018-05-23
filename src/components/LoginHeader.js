import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    marginBottom: 20
  },
  heading: {
    color: '#555',
    fontSize: '50px'
  }
};
class LoginHeader extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Github Leaderboard </h1>
      </div>
    );
  }
}

LoginHeader.propTypes = {};

export default LoginHeader;
