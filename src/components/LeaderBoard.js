import React, { Component } from 'react';
import LeaderBoardCell from './LeaderBoardCell';

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedData: []
    };
  }

  // renderTeamData = data => {
  //   const teamData = {
  //     commits: 0,
  //     additions: 0,
  //     deletions: 0
  //   };

  //   data.forEach(item => {
  //     teamData.commits += item.stats.commits || 0;
  //     teamData.additions += item.stats.additions || 0;
  //     teamData.deletions += item.stats.deletions || 0;
  //   });

  //   return teamData;
  // };

  sortLeaderBoardData = (data, type, order) => {
    return data.sort((item1, item2) => {
      if (!item1.stats[type] && !item2.stats[type]) {
        return 0;
      } else if (!item1.stats[type] && item2.stats[type]) {
        return order === 'asc' ? -1 : 1;
      } else if (item1.stats[type] && !item2.stats[type]) {
        return order === 'asc' ? 1 : -1;
      } else {
        return order === 'asc'
          ? item2.stats[type] - item1.stats[type]
          : item1.stats[type] - item2.stats[type];
      }
    });
  };

  componentWillReceiveProps(props) {
    const sortedData = this.sortLeaderBoardData(
      props.data,
      props.type,
      props.order
    );

    this.setState(() => ({ sortedData }));
  }

  render() {
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">{this.props.type}</div>
          <div className="panel-body">
            <table
              width="100%"
              className="table table-striped table-bordered table-hover"
              id="dataTables-example"
            >
              <tbody>
                {this.state.sortedData.map(item => (
                  <LeaderBoardCell
                    avatar={item.profile.avatar_url}
                    name={item.profile.login}
                    value={item.stats[this.props.type]}
                    label={this.props.type}
                    key={item.profile.login}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
