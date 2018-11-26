import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Feature from './components/Feature'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Feature />
        <Content />
      </div>
    );
  }
}

export default App;
