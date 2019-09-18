import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


// ---------------- 
// ToDo: i dont think i need this.
// -----------------
@inject("generalStore")
@observer
class AddUser extends Component {

    onChange = event => this.props.generalStore.handleAddUserInput(event.target.id,event.target.value)
    
    addUser = () => this.props.generalStore.addUser()
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12 m4 l4">
                        <input id="user" type="text" className="validate" onChange={event => this.onChange(event)}></input>
                        <label htmlFor="user">Username</label>
                    </div>
                    <div className="input-field col s12 m4 l4">
                        <input id="name" type="text" className="validate" onChange={event => this.onChange(event)}></input>
                        <label htmlFor="name">First Name</label>
                    </div>
                    <div className="input-field col s12 m4 l4">
                        <input id="lastName" type="text" className="validate" onChange={event => this.onChange(event)}></input>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6 l6">
                        <input id="password" type="password" className="validate" onChange={event => this.onChange(event)}></input>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s12 m6 l6">
                        <input id="email" type="email" className="validate" onChange={event => this.onChange(event)}></input>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <a className="waves-effect waves-light btn" onClick={this.addUser}><i className="material-icons right">send</i>button</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser;