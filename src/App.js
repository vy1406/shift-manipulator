import React, { Component } from 'react';

import Menu from './components/menu/Menu'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import './App.css';
import InnerMenu from './components/inner-menu/InnerMenu';

@inject("generalStore")
@observer
class App extends Component {

  renderLinks = () => {
    return (
      <div id="main-links">
        <Link to="/login">Logins </Link>
        <Link to="/about">About</Link>
        <Link to="/Shifts">Shifts</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/about"><button className="btn">about</button></Link>
        {/* <PrivateRoute exact path="/" component={HomePage} /> */}
      </div>
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="menu">
              <Menu />
            </div>
            <div className="header">
              {this.renderLinks()}
            </div>
            <div className="content">
              <InnerMenu />
            </div>

            <div className="footer"></div>

          </div>
        </div>

      </Router>
    );
  }
}

export default App;
