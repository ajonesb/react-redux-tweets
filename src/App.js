import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Landing from './components/home/Landing';
import Users from './components/home/Users';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/users/:id" component={Users} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
