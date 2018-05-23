import React, { Component } from 'react';
import Topbar from './Topbar';
import LeaderBoardList from './LeaderBoardList';

const styles = {
  header: {
    color: 'white',
    fontSize: '40px',
    borderBottom: 'none'
  }
};
export default class Dashboard extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="container">
          {/* <div> */}
          <h1 className="page-header" style={styles.header}>
            Github Leaderboard
          </h1>
          <Topbar {...this.props} />
          <LeaderBoardList {...this.props} />
        </div>
      </div>
    );
  }
}
