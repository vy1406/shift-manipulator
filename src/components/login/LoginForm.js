import React, { Component } from 'react';
import '../login/LoginForm.css'

class LoginForm extends Component {

    render() {
        const styles = {
            width: "100%"
        }
        return (
            <div class="row">
                <div className="col s12 m4 offset-m4">
                    <div className="card">
                        <div className="card-action teal lighten-1 white-text">
                            <h3>Login Form</h3>
                        </div>
                        <div className="card-content">
                            <div className="form-field">
                                <label for="username">Username</label>
                                <input type="text" id="username"></input>
                            </div>
                            <br></br>
                            <div className="form-field">
                                <label for="password">Password</label>
                                <input type="text" id="password"></input>
                            </div>
                            <br></br>
                            <div className="form-field">
                                <button className="btn-large waves-effect waves-dark" style={styles}>Login</button>
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