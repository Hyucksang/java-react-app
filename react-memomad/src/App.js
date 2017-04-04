import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import Photolist from './Photolist';

var myName = "이선귤"

class App extends Component {
  render() {
    console.log(myName);
  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyHeader />
          <h2>Welcome to React</h2>
        {myName}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Photolist />
      </div>
    );
  }
}

export default App;
