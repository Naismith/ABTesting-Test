import React from 'react';
import {hot} from 'react-hot-loader';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from './pages/Index';

import './App.css';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" name="home" component={Index} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
