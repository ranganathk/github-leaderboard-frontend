import React, { Component } from 'react';
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
        {this.props.data.map(({ profile, stats }) => (
          <User profile={profile} stats={stats} />
        ))}
      </div>
    );
  }
}

export default UsersList;
