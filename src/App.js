import React, { Component } from 'react';
import './bootstrap-social.css';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddToken from './components/AddToken';
import Header from './components/Header';
import DataService from './services/dataService';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, data: [], redirect: false };
  }

  async componentWillMount() {
    const url = new URL(window.location.href);
    const token =
      url.searchParams.get('accessToken') || DataService.isLoggedIn();
    // const token = true;
    if (token) {
      this.setState({ loggedIn: true });
      DataService.setLoggedIn(token);
      const resp = await DataService.getData();
      this.setState({ data: resp.data, redirect: true });

    }
  }

  logoutUser = () => {
    DataService.logout();
    this.setState(() => ({ loggedIn: false }));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {this.state.loggedIn && (
              <Route
                render={props => (
                  <Header logoutUser={this.logoutUser} {...props} />
                )}
              />
            )}
            <Switch>
              {this.state.loggedIn ? (
                <Route
                  path="/"
                  exact={true}
                  render={props => (
                    <Dashboard data={this.state.data} {...props} />
                  )}
                />
              ) : (
                <Route path="/" exact={true} component={Login} />
              )}
              {this.state.loggedIn && (
                <Route path="/add-token" component={AddToken} />
              )}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
