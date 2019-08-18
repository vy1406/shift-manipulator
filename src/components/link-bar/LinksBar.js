import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Calendar from '../calendar/Calendar';
import Shifts from '../shifts/Shifts';
import About from '../about/About';
import Login from '../login/Login';
import GiveOptions from '../give-options/GiveOptions';

@inject("generalStore")
@observer
class LinksBar extends Component {

    renderGiveOptions = () => this.props.generalStore.renderComponent(<GiveOptions />)

    renderAbout = () => this.props.generalStore.renderComponent(<About />)

    renderShifts = () => this.props.generalStore.renderComponent(<Shifts />)

    renderCalendar = () => this.props.generalStore.renderComponent(<Calendar />)

    render() {
        return (
            <div className="nav-content">
                <ul className="tabs tabs-transparent">  
                    <li className="tab col s3" onClick={this.renderGiveOptions}>Give Options </li>
                    <li className="tab col s3" onClick={this.renderAbout}>About</li>
                    <li className="tab col s3" onClick={this.renderShifts}>Shifts</li>
                    <li className="tab col s3" onClick={this.renderCalendar}>calendar</li>
                </ul>
            </div>
        )
    }
}

export default LinksBar;