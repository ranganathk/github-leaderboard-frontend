import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SelectTimePeriod from './SelectTimePeriod';
export default class Header extends Component {
  logout = () => {
    this.props.history.push('/');
    this.props.logoutUser();
  };
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: '#273748' }}
      >
        <NavLink to="/">
          <a className="navbar-brand" href="#">
            <i className="fab fa-github" /> Code Astra
          </a>
        </NavLink>

        <div
          className="collapse navbar-collapse pull-right"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto" style={{ listStyleType: 'none' }}>
            <li className="nav-item dropdown">
              <div
                style={{
                  padding: 15,
                  paddingRight: 40,
                  flexDirection: 'row',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="Select a Time Period."
              >
                <i
                  className="far fa-clock"
                  style={{ fontSize: 20, color: '#337ab7' }}
                />
                <SelectTimePeriod
                  timePeriod={this.props.timePeriod}
                  updateTimePeriod={this.props.updateTimePeriod}
                />
              </div>
            </li>
            <li className="nav-item dropdown" title="Add Tken">
              <NavLink to="/add-token">
                <div style={{ padding: 15 }}>
                  <i className="fa fa-plus" style={{ fontSize: 20 }} />
                </div>
              </NavLink>
            </li>
            <li title="Sign out">
              <a onClick={this.props.logoutUser}>
                <div style={{ padding: 15 }}>
                  <i
                    className="fa fa-sign-out-alt"
                    style={{ fontSize: 20 }}
                    onClick={this.props.logoutUser}
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
