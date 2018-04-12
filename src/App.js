import React, { Component } from 'react';
import './bootstrap-social.css';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DataService from './services/dataService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: true, data: [] };
  }

  async componentWillMount() {
    // const url = new URL(window.location.href);
    // const token = url.searchParams.get('userToken') || DataService.isLoggedIn();
    const token = true;
    if (token) {
      this.setState(() => ({ loggedIn: true }));
      DataService.setLoggedIn(token);
      const resp = await DataService.getData();
      this.setState(() => ({ data: resp.data }));
    }
  }

  logoutUser = () => {
    DataService.logout();
    this.setState(() => ({ loggedIn: false }));
  };

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <Dashboard logoutUser={this.logoutUser} data={this.state.data} />
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
