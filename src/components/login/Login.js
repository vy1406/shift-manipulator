import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Select from 'react-select';
import axios from 'axios';
import M from "materialize-css";
import AddUser from '../add-user/AddUser';

@inject("generalStore")
@observer
class Login extends Component {

    // for other selectors
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    // for other selectors
    componentDidMount() {
        let selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }

    async componentWillMount() {
        let users = await axios.get("http://localhost:8080/users")
        this.props.generalStore.createDropDownUserSelect(users.data)
    }

    handleInput = event => { this.props.generalStore.handleInput(event.target.className, event) }

    login = () => { console.log(this.props.generalStore.curUser) }

    onChange = event => { console.log(event) }

    renderOtherDropDowns = () => {
        console.log("you can see other drop downs here...")
        const url = "https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down"
        const obj = {
            options: [
                {
                    name: 'Selec2t…',
                    value: null,
                },
                {
                    name: 'A',
                    value: 'a',
                },
                {
                    name: 'B',
                    value: 'b',
                },
                {
                    name: 'C',
                    value: 'c',
                },
            ],
            value: '?'
        }

        const { options, value } = obj;

        return (
            <div className="row">
                <div className="input-field col s4">
                    <select className="browser-default" onChange={this.onChange}>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className="input-field col s4">
                    <select onChange={this.handleChange} value={value}>
                        {options.map(item => (
                            <option
                                key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <h1>Favorite letter: {value}</h1>
                </div>
            </div>
        )
    }

    render() {
        console.log("you have here other dropDowns")
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l6">
                        <Select id={'dropdown'}
                            options={this.props.generalStore.selectOptions}
                            defaultValue={{ label: "Select user", value: 0 }}
                            onChange={value => this.props.generalStore.curUser = value.value}>
                        </Select>
                    </div>
                    <div className="col s12 m6 l6">
                            <a className="waves-effect waves-light btn" onClick={this.login}><i className="material-icons right">cloud</i>Login</a>
                    </div>
                </div>
                <AddUser />
            </div>
        )
    }
}

export default Login;