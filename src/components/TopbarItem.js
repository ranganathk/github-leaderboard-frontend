import React, { Component } from 'react';

export default class TopbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  computeTotalData = (data, type) => {
    if (!data || !Array.isArray(data)) return 0;
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
    const { iconName } = this.props;
    const iconClassName = `fa ${iconName} fa-5x`;
    return (
      <div className={'col-lg-2 col-md-4 col-xs-12'}>
        <div className={'bg-' + this.props.color}>
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-3">
                <i className={iconClassName} />
                {/* <ion-icon name="git-commit" style={{ fontSize: 24 }} /> */}
              </div>
              <div className="col-xs-9 text-right">
                <div className="huge" style={{ fontSize: '24px' }}>
                  {this.state.total.toLocaleString()}
                </div>
                <div>{this.props.type}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
