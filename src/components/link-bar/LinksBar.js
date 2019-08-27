import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Calendar from '../calendar/Calendar';
import Shifts from '../shifts/Shifts';
import RequestShifts from '../request-shifts/RequestShifts';
import Login from '../login/Login';
import GiveOptions from '../give-options/GiveOptions';
import BuildWeek from '../build-week/BuildWeek';

@inject("generalStore")
@observer
class LinksBar extends Component {

    renderGiveOptions = () => this.props.generalStore.renderComponent(<GiveOptions />)

    renderRequestShifts = () => this.props.generalStore.renderComponent(<RequestShifts />)

    renderBuildWeek = () => this.props.generalStore.renderComponent(<BuildWeek />)

    renderLogin = () => this.props.generalStore.renderComponent(<Login />)

    render() {
        return (
            <div className="nav-content">
                <ul className="tabs tabs-transparent">  
                    <li className="tab col s3" onClick={this.renderGiveOptions}>Give Options </li>
                    <li className="tab col s3" onClick={this.renderRequestShifts}>Request Shifts</li>
                    <li className="tab col s3" onClick={this.renderBuildWeek}>BuildWeek</li>
                    <li className="tab col s3" onClick={this.renderLogin}>login</li>
                </ul>
            </div>
        )
    }
}

export default LinksBar;