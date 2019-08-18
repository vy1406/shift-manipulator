import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

// import './menu.css';
import CreateWeek from '../createWeek/CreateWeek';

@inject("generalStore")
@observer
class Menu extends Component {

    renderCreateWeek = () => {
        this.props.generalStore.renderComponent(<CreateWeek />)
    }

    render() {
        return (
            <div className="side-nav">
                <div className="profile">
                    <div className="card">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a href="#"> This is a link</a>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <button className="create_week btn" onClick={this.renderCreateWeek}>Create week</button>
                    <button className="give_options btn">Give options</button>
                    <button className="add_remove btn">Add/Remove Worker</button>
                </div>


            </div>
        )
    }
}

export default Menu;