import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import Login from './components/login/Login'
import About from './components/about/About'
import Calendar from './components/calendar/Calendar'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import './App.css';

@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: ""
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/calendar" exact component={Calendar} />

          <div id="main-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">menu</Link>
            <Link to="/calendar">calendar</Link>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
