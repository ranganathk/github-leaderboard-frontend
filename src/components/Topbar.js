import React, { Component } from 'react';

export default class Topbar extends Component {
  render() {
    return (
      <div className="col-lg-9">
        {/* {this.props.data && this.renderUserData(this.props.data)} */}
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-comments fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">26</div>
                    <div>New Comments!</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right">
                    <i className="fa fa-arrow-circle-right" />
                  </span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-green">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-tasks fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">12</div>
                    <div>New Tasks!</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right">
                    <i className="fa fa-arrow-circle-right" />
                  </span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-yellow">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-shopping-cart fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">124</div>
                    <div>New Orders!</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right">
                    <i className="fa fa-arrow-circle-right" />
                  </span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="panel panel-red">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-support fa-5x" />
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">13</div>
                    <div>Support Tickets!</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right">
                    <i className="fa fa-arrow-circle-right" />
                  </span>
                  <div className="clearfix" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
