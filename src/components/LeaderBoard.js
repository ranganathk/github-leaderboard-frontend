import React, { Component } from 'react';
import LeaderBoardCell from './LeaderBoardCell';

const styles = {
  header: {
    fontSize: '24px',
    fontWeight: '500',
    color: '#333',
    backgroundColor: 'rgba(173, 188, 204, 0.3)'
  },
  panel: {
    border: '0px'
  }
};
export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedData: []
    };
  }

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
        <div className="panel panel-default" style={styles.panel}>
          <div className="panel-heading" style={styles.header}>
            {this.props.type.toUpperCase()}
          </div>
          {/* <div className="panel-body"> */}
          <table
            width="100%"
            className="table table-striped table-hover"
            id="dataTables-example"
          >
            <tbody>
              {this.state.sortedData.map((item, index) => (
                <LeaderBoardCell
                  avatar={item.profile.avatar_url}
                  name={item.profile.login}
                  value={item.stats[this.props.type]}
                  label={this.props.type}
                  key={item.profile.login}
                  rank={index}
                />
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
