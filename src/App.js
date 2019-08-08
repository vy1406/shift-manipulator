import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import Login from './components/login/Login'
import About from './components/about/About'
import Calendar from './components/calendar/Calendar'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import './App.css';

@inject("generalStore")
@observer
class App extends Component {

  render() {
    return (
      <Router>
        {this.props.generalStore.curUser !== "" ?
          <Login />
          :
          <div className="App">
            <Route path="/login" exact component={Login} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/calendar" exact component={Calendar} />

            <div id="main-links">
              <Link to="/login">Logins </Link>
              <Link to="/about">About</Link>
              <Link to="/menu">menu</Link>
              <Link to="/calendar">calendar</Link>
              <Link to="/about"><button className="btn">about</button></Link>
              {/* <PrivateRoute exact path="/" component={HomePage} /> */}
            </div>

          </div>
        }
      </Router>
    );
  }
}

export default App;
