import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {

    render() {
        return (
            <div className="side-nav">
                <div className="profile">
                    <div className="user_picture">
                        <span>[picture]</span>
                    </div>
                </div>
                <div className="controls">
                    <button className="shift_request btn">Send shift request</button>
                    <button className="create_week btn">Create week</button>
                    <button className="give_options btn">Give options</button>
                    <button className="add_remove btn">Add/Remove Worker</button>
                </div>
            </div>
        )
    }
}

export default Menu;