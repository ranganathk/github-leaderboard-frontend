import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: '#273748' }}
      >
        <a className="navbar-brand" href="#">
          <i class="fab fa-github" /> Code Astra
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
              <a onClick={this.props.logoutUser}>
                <div style={{ padding: 15 }}>
                  <i
                    className="fa fa-sign-out-alt"
                    style={{ fontSize: 20 }}
                    onClick={this.props.logoutUser}
                  />
                </div>
              </a>
              {/* <button
                onClick={this.props.logoutUser}
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
              </button> */}
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
