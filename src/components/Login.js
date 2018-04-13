import React from 'react';
import LoginHeader from './LoginHeader';

const href =
  'https://github.com/login/oauth/authorize?client_id=0082b07a83cce83b50f6&redirect_uri=https%3A%2F%2F87362fcb.ngrok.io%2Fusers%2Flogin&scope=user%20repo&state=crypto_nonce';
const styles = {
  container: {
    marginTop: '30vh'
  },
  link: {
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  signInText: {
    paddingLeft: '15px'
  }
};
const Login = () => (
  <div>
    <LoginHeader />
    <div className="container" style={styles.container}>
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="login-panel panel panel-default">
            <div className="panel-heading">
              <a
                className="btn btn-block btn-github"
                style={styles.link}
                href={href}
              >
                <span className="fab fa-github" data-fa-transform="grow-6" />{' '}
                <span style={styles.signInText}>
                  {'  '} Sign in with GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
