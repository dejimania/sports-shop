import React, { Component } from 'react';
import { SportsShopDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ SportsShopDataStore }>
        <Router>
          <Switch>
            <Route path="/shop" component={ ShopConnector } />
            <Redirect to="/shop" />
          </Switch>
        </Router>
      </Provider>

    );
  }
}

export default App;
