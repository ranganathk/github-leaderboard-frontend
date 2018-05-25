import React, { Component } from 'react';
import LeaderBoard from './LeaderBoard';
import {
  LEADER_TYPE_ADDITIONS,
  LEADER_TYPE_DELETIONS,
  LEADER_TYPE_COMMITS,
  LEADER_TYPE_RECENTLY_ADDED
} from '../constants';

const styles = {
  tableContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  table: {
    marginLeft: '40px',
    marginRight: '40px',
    minWidth: '300px'
  }
};
export default class LeaderBoardList extends Component {
  render() {
    return (
      <div style={styles.tableContainer}>
        <div className="" style={styles.table}>
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_ADDITIONS}
            order="desc"
          />
        </div>
        <div className="" style={styles.table}>
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_DELETIONS}
            order="desc"
          />
        </div>
        <div className="" style={styles.table}>
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_COMMITS}
            order="desc"
          />
        </div>
        {/* <div className="" style={styles.table}>
          <LeaderBoard
            {...this.props}
            type={LEADER_TYPE_RECENTLY_ADDED}
            order="desc"
          />
        </div> */}
      </div>
    );
  }
}
