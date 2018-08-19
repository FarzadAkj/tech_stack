import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import { Header } from './src/components/common';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Header title="tech_stack" />
      </Provider>
    );
  }
}
