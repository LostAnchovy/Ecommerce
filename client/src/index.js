import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mainbody from './Mainbody'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(<Mainbody />, document.getElementById('root2'));
// registerServiceWorker();

ReactDOM.render(<Header />, document.getElementById('header'));
registerServiceWorker();

