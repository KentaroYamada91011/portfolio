import React from 'react';
import posed from 'react-pose'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import Home from './component/Home';
import './index.css';
import ToDo from './ToDo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <ToDo />
    <Route exact path={'/'} component={Home}/>
    <Route path={'/about'}  component={About}/>
    <Route path={'/work'} component={Work}/>
    <Route path={'/contact'} component={Contact}/>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
