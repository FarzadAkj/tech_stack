import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>
            Hello world!
          </Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
