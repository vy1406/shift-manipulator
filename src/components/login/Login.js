import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("generalStore")
@observer
class Login extends Component {

    handleInput = event => { this.props.generalStore.handleInput(event.target.className, event) }

    login = () => { this.props.generalStore.login() }

    render() {
        return (
            <div>i'm a login.
                 <div>Login</div>
                <input className="email" type="text" placeholder="Email" onChange={this.handleInput} />
                <input className="password" type="password" placeholder="Password" onChange={this.handleInput} />
                <button className="login-btn" onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;