import React, { Component } from 'react';

export default class AddToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  cancelToken = () => {};

  submitToken = () => {};

  render() {
    return (
      <div className=" col-md-offset-3 col-md-6">
        <form>
          <div className="form-group">
            <label>Add your repository token</label>
            <input className="form-control" placeholder="TOKEN" />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your token with anyone else.
            </small>
          </div>
          <button type="cancel">Cancel</button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
