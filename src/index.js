import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './components/User';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
