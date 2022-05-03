import React, { Component } from 'react';
import { BroswerRouter as Route, Switch } from "react-router-dom";

import Home from './Home.js';
import Header from './Header.js';
import Checkout from './Checkout.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />

            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>


          </Switch>
        </Router>


      </div>
    );
  }
}

export default App;
