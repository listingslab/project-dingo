import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Project Dingo</h2>
        </div>
        <p className="App-intro">
          version 0.1.2
        </p>
      </div>
    );
  }
}

export default App;
