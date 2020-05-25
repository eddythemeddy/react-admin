import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main';
import Footer from './components/Footer';
import store from './store/Store.js';
import "@babel/polyfill";

class App extends Component {

  constructor() {
    super();
    document.body.classList.add('fixed-header');    
    document.body.classList.add('menu-pin');     
  }

  render() {
    return (
      <Provider store={store}>
        <Main></Main>
        <Footer></Footer>
      </Provider>
    );
  }
}

export default App;