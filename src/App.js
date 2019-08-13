import React, { Component } from 'react';
import Shifts from './components/shifts/Shifts';
import Login from './components/login/Login'
import About from './components/about/About'
import Calendar from './components/calendar/Calendar'
import Menu from './components/menu/Menu'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import './App.css';

@inject("generalStore")
@observer
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="menu">
              <Menu />
            </div>
            <div className="header">
              <div id="main-links">
                <Link to="/login">Logins </Link>
                <Link to="/about">About</Link>
                <Link to="/Shifts">Shifts</Link>
                <Link to="/calendar">calendar</Link>
                <Link to="/about"><button className="btn">about</button></Link>
                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
              </div>
            </div>
            <div className="content">
              <Route path="/login" exact component={Login} />
              <Route path="/shifts" exact component={Shifts} />
              <Route path="/about" exact component={About} />
              <Route path="/calendar" exact component={Calendar} />
            </div>

            <div className="footer"></div>

          </div>
        </div>

      </Router>
    );
  }
}

export default App;
