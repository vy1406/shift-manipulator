import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

@inject("generalStore")
@observer
class LinksBar extends Component {

    renderAdminLinks = () => {
        return (
            <ul className="tabs tabs-transparent">
                <li className="tab col s3"><Link to="/giveoptions">Give Options</Link></li>
                <li className="tab col s3"><Link to="/schedule">WorkSchedule</Link></li>
                <li className="tab col s3"><Link to="/build">BuildWeek</Link></li>
                <li className="tab col s3"><Link to="/login">LoginForm</Link></li>
            </ul>
        )
    }

    renderBasicLinks = () => {
        return (
            <ul className="tabs tabs-transparent">
                <li className="tab col s6 m6 l6" ><Link to="/giveoptions">Give Options</Link></li>
                <li className="tab col s6 m6 l6" ><Link to="/schedule">WorkSchedule</Link></li>
            </ul>
        )
    }

    render() {
        return (
            <div className="nav-content">
                {/* {this.props.generalStore.loggedUser.isAdmin ?
                    this.renderAdminLinks()
                    :
                    this.renderBasicLinks()} */}
                {this.renderAdminLinks()}
            </div>
        )
    }
}

export default LinksBar;