import React, { Component } from 'react';

export default class TopbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  computeTotalData = (data, type) => {
    return data.reduce((accumulator, item) => {
      if (item.stats[type]) {
        return accumulator + item.stats[type];
      } else {
        return accumulator;
      }
    }, 0);
  };

  componentWillReceiveProps(props) {
    const total = this.computeTotalData(props.data, props.type);
    this.setState(() => ({ total }));
  }

  render() {
    return (
      <div className="col-lg-3 col-md-6">
        <div className={'panel panel-' + this.props.color}>
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-3">
                <i className="fa fa-comments fa-5x" />
              </div>
              <div className="col-xs-9 text-right">
                <div className="huge">{this.state.total}</div>
                <div>{this.props.type}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
