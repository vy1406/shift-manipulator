import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Calendar from '../calendar/Calendar';
import Shifts from '../shifts/Shifts';
import RequestShifts from '../request-shifts/RequestShifts';
import Login from '../login/Login';
import GiveOptions from '../give-options/GiveOptions';
import BuildWeek from '../build-week/BuildWeek';
import LoginForm from '../login/LoginForm';

@inject("generalStore")
@observer
class LinksBar extends Component {

    renderGiveOptions = () => this.props.generalStore.renderComponent(<GiveOptions />)

    renderLogin = () => this.props.generalStore.renderComponent(<Login />)

    renderBuildWeek = () => this.props.generalStore.renderComponent(<BuildWeek />)

    renderLoginForm = () => this.props.generalStore.renderComponent(<LoginForm />)

    render() {
        return (
            <div className="nav-content">
                <ul className="tabs tabs-transparent">  
                    <li className="tab col s3" onClick={this.renderGiveOptions}>Give Options </li>
                    <li className="tab col s3" onClick={this.renderLogin}>Login</li>
                    <li className="tab col s3" onClick={this.renderBuildWeek}>BuildWeek</li>
                    <li className="tab col s3" onClick={this.renderLoginForm}>LoginForm</li>
                </ul>
            </div>
        )
    }
}

export default LinksBar;