import React, { Component } from 'react';
import LeaderBoard from './LeaderBoard';
const LEADER_TYPE_ADDITIONS = 'additions';
const LEADER_TYPE_DELETIONS = 'deletions';
const LEADER_TYPE_COMMITS = 'commits';
const LEADER_TYPE_RECENTLY_ADDED = 'recentlyAdded';

export default class LeaderBoardList extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6">
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_ADDITIONS}
            order="desc"
          />
        </div>
        <div className="col-md-6">
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_DELETIONS}
            order="desc"
          />
        </div>
        <div className="col-md-6">
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_COMMITS}
            order="desc"
          />
        </div>
        <div className="col-md-6">
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_RECENTLY_ADDED}
            order="desc"
          />
        </div>
      </div>
    );
  }
}
