import React, { Component } from 'react';
import Header from './Header';

export default class Dashboard extends Component {
  renderTeamData = data => {
    const teamData = {
      commits: 0,
      additions: 0,
      deletions: 0
    };

    data.forEach(item => {
      teamData.commits += item.stats.commits || 0;
      teamData.additions += item.stats.additions || 0;
      teamData.deletions += item.stats.deletions || 0;
    });

    return teamData;
  };

  renderTableData = data => {
    return data
      .sort((item1, item2) => {
        if (!item1.stats.commits) {
          if (item2.stats.commits) {
            return 1;
          }
          return 0;
        } else {
          if (!item2.stats.commits) {
            return -1;
          } else {
            if (item1.stats.commits > item2.stats.commits) {
              return 1;
            } else {
              return -1;
            }
          }
        }
      })
      .map(item => (
        <tr className="even gradeC" key={item.profile.login}>
          <td>{item.profile.login}</td>
          <td>{item.stats.commits || '-'}</td>
          <td>{item.stats.additions || '-'}</td>
          <td>{item.stats.deletions || '-'}</td>
        </tr>
      ));
  };

  render() {
    return (
      <div id="wrapper">
        <Header logoutUser={this.props.logoutUser} />
        <div className="row">
          <div className="navbar-default sidebar col-lg-3" role="navigation">
            <div className="sidebar-nav navbar-collapse">
              <ul className="nav" id="side-menu">
                <li className="sidebar-search">
                  <div className="input-group custom-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fa fa-dashboard fa-fw" /> Dashboard
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-bar-chart-o fa-fw" /> Charts<span className="fa arrow" />
                  </a>
                  <ul className="nav nav-second-level">
                    <li>
                      <a href="flot.html">Flot Charts</a>
                    </li>
                    <li>
                      <a href="morris.html">Morris.js Charts</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="tables.html">
                    <i className="fa fa-table fa-fw" /> Tables
                  </a>
                </li>
                <li>
                  <a href="forms.html">
                    <i className="fa fa-edit fa-fw" /> Forms
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-wrench fa-fw" /> UI Elements<span className="fa arrow" />
                  </a>
                  <ul className="nav nav-second-level">
                    <li>
                      <a href="panels-wells.html">Panels and Wells</a>
                    </li>
                    <li>
                      <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="notifications.html">Notifications</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="icons.html"> Icons</a>
                    </li>
                    <li>
                      <a href="grid.html">Grid</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <h1 className="page-header">Dashboard</h1>
          </div>
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
          <div className="col-lg-9">
            <h1 className="page-header">Tables</h1>
          </div>
          <div className="col-lg-9">
            <div className="panel panel-default">
              <div className="panel-heading">DataTables Advanced Tables</div>
              <div className="panel-body">
                <table
                  width="100%"
                  className="table table-striped table-bordered table-hover"
                  id="dataTables-example"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Number of Commits</th>
                      <th>Lines of code added</th>
                      <th>Lines of code deleted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data && this.renderTableData(this.props.data)}
                    {/* <tr className="odd gradeX">
                      <td>Trident</td>
                      <td>Internet Explorer 4.0</td>
                      <td>Win 95+</td>
                      <td className="center">4</td>
                      <td className="center">X</td>
                    </tr>
                    <tr className="even gradeC">
                      <td>Trident</td>
                      <td>Internet Explorer 5.0</td>
                      <td>Win 95+</td>
                      <td className="center">5</td>
                      <td className="center">C</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
