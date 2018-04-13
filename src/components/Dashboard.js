import React, { Component } from 'react';
import Header from './Header';
import Topbar from './Topbar';
import LeaderBoardList from './LeaderBoardList';

export default class Dashboard extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header logoutUser={this.props.logoutUser} />
        <div className="container">
          <h1 className="page-header">Dashboard</h1>
          <Topbar {...this.props} />
          <LeaderBoardList {...this.props} />
        </div>
      </div>
    );
  }
}
