import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          My Scorer
        </a>

        <div
          className="collapse navbar-collapse pull-right"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto" style={{ listStyleType: 'none' }}>
            <li className="nav-item dropdown">
              {/* <button
                className=" dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button> */}
              <button onClick={this.props.logoutUser}>Logout</button>
              {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" >
                  Logout
                </a>
              </div> */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
