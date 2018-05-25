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
    this.updateTimePeriod = this.updateTimePeriod.bind(this);
    this.updateData = this.updateData.bind(this);
    this.state = {
      loggedIn: false,
      data: [],
      fetchingData: false,
      redirect: false,
      timePeriod: 'WEEK'
    };
  }

  async componentWillMount() {
    const url = new URL(window.location.href);
    const token =
      url.searchParams.get('accessToken') || DataService.isLoggedIn();
    // const token = true;
    if (token) {
      this.setState({ loggedIn: true });
      DataService.setLoggedIn(token);
      const resp = await DataService.getData(this.state.timePeriod);
      this.setState({ data: resp.data, redirect: true });
    }
  }

  async updateData() {
    this.setState({ fetchingData: true });
    const resp = await DataService.getData(this.state.timePeriod);
    this.setState({ data: resp.data, redirect: true, fetchingData: false });
  }

  logoutUser = () => {
    DataService.logout();
    this.setState(() => ({ loggedIn: false }));
  };

  updateTimePeriod(timePeriod) {
    this.setState({ timePeriod }, () => this.updateData());
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {this.state.loggedIn && (
              <Route
                render={props => (
                  <Header
                    logoutUser={this.logoutUser}
                    updateTimePeriod={this.updateTimePeriod}
                    {...props}
                  />
                )}
              />
            )}
            <Switch>
              {/* {
                this.state.redirect && <Redirect to="/" />
              } */}
              {this.state.loggedIn ? (
                <Route
                  path="/"
                  exact={true}
                  render={props => (
                    <Dashboard
                      data={this.state.data}
                      fetchingData={this.state.fetchingData}
                      {...props}
                    />
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
