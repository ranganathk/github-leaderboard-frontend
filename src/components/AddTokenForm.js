import React, { Component } from 'react';
import DataService from '../services/dataService';

const NONE = 0;
const SUBMITTING = 1;
const SUCCESS = 2;
const FAILURE = 3;
export default class AddTokenForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      status: NONE
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
    try {
      this.setState(() => ({ status: SUBMITTING }));
      const resp = await DataService.saveUserToken(this.state.token);
      document.getElementById('submit-token-form').reset();
      this.setState(() => ({ token: '', status: SUCCESS })); 
    } catch (ex) {
      this.setState(() => ({ status: FAILURE }));  
    }
  };

  render() {
    return <div className="col-md-6 col-md-offset-3">
        <form id="submit-token-form" onSubmit={this.submitToken}>
          <div className="form-group">
            <label>Personal token</label>
            <input className="form-control" onChange={this.updateToken} placeholder="Paste your token here" style={{ 'background-color': 'transparent', color: 'white', 'border-color': 'grey' }} />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your token with anyone else.
            </small>
          </div>
          {/* <button
            type="cancel"
            onClick={this.clearToken}
            style={{
              'background-color': 'transparent',
              'border-style': 'none'
            }}
          >
            Cancel
          </button> */}
          <button type="submit" disabled={!this.state.token} className="btn btn-primary">
            Submit
          </button>
          <div>
            {this.state.status === SUCCESS && <small>
              Successfully updated
                </small>}

            {this.state.status === FAILURE && <small>
              Failed to update. Please try again.
                </small>}
          </div>
        </form>
      </div>;
  }
}
