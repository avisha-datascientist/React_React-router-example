import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Link, Route } from 'react-router-dom';
import {hashHistory} from 'react-router';
import Routes from './comp/Routes.js';

ReactDOM.render(<Routes />,document.getElementById('main'));