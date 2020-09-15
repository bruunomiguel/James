import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Card from './Components/Card';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Card} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
