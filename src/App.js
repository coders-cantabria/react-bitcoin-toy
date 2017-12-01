/** @format */

import React, { Component } from 'react';
import './App.css';
import createReduxStore from './store';
import { receiveBlocks } from './store/actions';
import Router from './Router';
import { Provider } from 'react-redux';

const store = createReduxStore();

class App extends Component {
  componentWillMount() {
    this.fetchBlocks();
  }

  async fetchBlocks() {
    const resp = await fetch(
      `https://blockchain.info/blocks/${Date.now()}?format=json&cors=true`
    );
    const { blocks } = await resp.json();
    store.dispatch(receiveBlocks(blocks));
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
