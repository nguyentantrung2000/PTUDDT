import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { Component } from 'react';
import Main from './components/MainComponent';

// redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
export default App;
