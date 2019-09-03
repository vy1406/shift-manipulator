import React, { Component } from 'react';
import '../login/LoginForm.css'
import { observer, inject } from 'mobx-react'
import axios from 'axios';
import M from "materialize-css";

@inject("generalStore")
@observer
class LoginForm extends Component {

    login = () => {
        this.props.generalStore.login()
    }

    render() {

        const styles = {
            width: "100%"
        }

        this.props.generalStore.logout()
        
        return (
            <div class="row">
                <div className="col s12 m4 offset-m4">
                    <div className="card">
                        <div className="card-action center teal lighten-1 white-text">
                            <h3>Login Form</h3>
                        </div>
                        <div className="card-content">
                            <div className="form-field">
                                <label for="username">Username</label>
                                <input type="text" id="username"
                                    onChange={event => this.props.generalStore.userinput = event.target.value}>
                                </input>
                            </div>
                            <br></br>
                            <div className="form-field">
                                <label for="password">Password</label>
                                <input type="password" id="password"
                                    onChange={event => this.props.generalStore.passwordinput = event.target.value}>
                                </input>
                            </div>
                            <br></br>
                            <div className="form-field">
                                <button className="btn-large waves-effect waves-dark" style={styles}
                                    onClick={this.login}>Login</button>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;