import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';
const styles = {
  container: {
    flex: 1,
    flexWrap: 'wrap',
    display: 'flex'
  }
};

class UsersList extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.userData.map(({ profile, stats }) => (
          <User profile={profile} stats={stats} key={profile.login} />
        ))}
      </div>
    );
  }
}

UsersList.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      profile: PropTypes.object.isRequired,
      stats: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
};

export default UsersList;
