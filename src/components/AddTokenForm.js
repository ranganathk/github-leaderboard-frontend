import React, { Component } from 'react';
import DataService from '../services/dataService';

export default class AddTokenForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  updateToken = ev => {
    const token = ev.target.value;
    this.setState(() => ({ token }));
  };

  clearToken = ev => {
    ev.preventDefault();
    document.getElementById('submit-token-form').reset();
    this.setState(() => ({ token: '' }));
  };

  submitToken = async ev => {
    ev.preventDefault();
    const resp = await DataService.saveUserToken(this.state.token);
    document.getElementById('submit-token-form').reset();
    this.setState(() => ({ token: '' }));
  };

  render() {
    return (
      <div className="col-md-6">
        <form id="submit-token-form" onSubmit={this.submitToken}>
          <div className="form-group">
            <label>Add your repository token</label>
            <input
              className="form-control"
              onChange={this.updateToken}
              placeholder="TOKEN"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your token with anyone else.
            </small>
          </div>
          <button type="cancel" onClick={this.clearToken}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
