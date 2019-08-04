import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("generalStore")
@observer
class Login extends Component {

    handleInput = event => { this.props.generalStore.handleInput(event) }

    login = () => {
        console.log("loggin in..")
    }

    render() {
        return (
             <div>i'm a login.
                 <div>Login</div>
                 <input className="username_input" type="text" placeholder=" Username" onChange={this.handleInput}/>
                 <input className="password" type="password" placeholder="Password" onChange={this.handleInput}/>
                 <button className="login-btn" onClick={this.login}>Login</button>
             </div>
        )
    }
}

export default Login;