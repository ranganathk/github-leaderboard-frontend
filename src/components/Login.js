import React from 'react';
const href =
  'https://github.com/login/oauth/authorize?client_id=0082b07a83cce83b50f6&redirect_uri=https%3A%2F%2F87362fcb.ngrok.io%2Fusers%2Flogin&scope=user%20repo&state=crypto_nonce';

const Login = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <div className="login-panel panel panel-default">
          <div className="panel-heading">
            <h3>
              <a className="btn btn-block btn-social btn-github" href={href}>
                <span className="fa fa-github" /> Sign in with github
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
