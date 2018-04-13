import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.history.push('/');
    this.props.logoutUser;
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            My Scorer
          </a>
          <ul
            className="navbar-nav mr-auto pull-right"
            style={{ listStyleType: 'none' }}
          >
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/">Home</NavLink>
                <div className="dropdown-divider" />
                <NavLink to="/add-token">Add Token</NavLink>
                <div className="dropdown-divider" />
                <div onClick={this.logout} className="dropdown-item">
                  Logout
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
