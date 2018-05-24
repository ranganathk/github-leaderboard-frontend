import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/'>
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
              <NavLink to="/add-token">
                <div style={{ padding: 15 }}>
                  <i className="fa fa-plus" style={{ fontSize: 20 }} />
                </div>
              </NavLink>
            </li>
            <li>
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
