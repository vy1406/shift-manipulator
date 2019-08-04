import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import Login from './components/login/Login'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: ""
    }
  }

  render() {
    return (
      <div className="App">
        {this.currentUser ? <Menu /> : <Login />}
      </div>
    );
  } 
}

export default App;
