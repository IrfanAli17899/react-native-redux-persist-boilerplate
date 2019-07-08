/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';



import Home from './src/screens/Home/Home';
import { Provider } from 'react-redux'
import { store } from './src/Store/Store'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}



const styles = StyleSheet.create({

});



export default App;
