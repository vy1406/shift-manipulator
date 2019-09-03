import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../link-bar/LinkBar.css'
@inject("generalStore")
@observer
class LinksBar extends Component {


    renderAdminLinks = () => {

        return (

            <ul className="tabs tabs-transparent  teal lighten-1" >
                <li className="tab col s3"><Link to="/giveoptions">Give Options</Link></li>
                <li className="tab col s3"><Link to="/">Roster</Link></li>
                <li className="tab col s3"><Link to="/build">BuildWeek</Link></li>
                <li className="tab col s3"><Link to="/logout">Logout</Link></li>
            </ul>

        )
    }

    renderBasicLinks = () => {
        return (
            <ul className="tabs tabs-transparent">
                <li className="tab col s4 m4 l4" ><Link to="/giveoptions">Give Options</Link></li>
                <li className="tab col s4 m4 l4" ><Link to="/">Roster</Link></li>
                <li className="tab col s4 m4 l4"><Link to="/logout">Logout</Link></li>
            </ul>
        )
    }

    render() {
        return (
            <div className="nav-content">
                {this.props.generalStore.loggedUser.isAdmin ?
                    this.renderAdminLinks()
                    :
                    this.renderBasicLinks()}
                {/* {this.renderAdminLinks()} */}
            </div>
        )
    }
}

export default LinksBar;