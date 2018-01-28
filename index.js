import { AppRegistry } from 'react-native';
import App from './app/index';
import React, { Component } from 'react';
import store from './app/store/configureStore';
import { Provider } from 'react-redux';
export default class GroceryShop extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('GroceryShop', () => GroceryShop);
