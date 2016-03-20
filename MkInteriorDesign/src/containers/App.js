'use strict';

import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from '../containers/Navigation';
import store from '../config/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
