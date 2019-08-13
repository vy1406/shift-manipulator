import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from '../login/Login';
import Shifts from '../shifts/Shifts';
import About from '../about/About';
import Calendar from '../calendar/Calendar';
class InnerMenu extends Component {

    render() {
        return (
            <div>
                <Route path="/login" exact component={Login} />
                <Route path="/shifts" exact component={Shifts} />
                <Route path="/about" exact component={About} />
                <Route path="/calendar" exact component={Calendar} />
            </div>
        )
    }
}

export default InnerMenu;