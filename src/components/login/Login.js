import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Select from 'react-select';
import axios from 'axios';
import M from "materialize-css";
import AddUser from '../add-user/AddUser';

@inject("generalStore")
@observer
class Login extends Component {

    constructor() {
        super()
        this.state = {
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
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    componentDidMount() {
        let selects = document.querySelectorAll('select');
        M.FormSelect.init(selects, {});
    }

    async componentWillMount() {
        let users = await axios.get("http://localhost:8080/users")
        this.props.generalStore.createDropDownUserSelect(users.data)
    }

    handleInput = event => { this.props.generalStore.handleInput(event.target.className, event) }

    login = () => { this.props.generalStore.login() }

    onChange = event => { console.log(event) }

    render() {
        const { options, value } = this.state;

        const options3 = [
            { label: "a", value: "a", disabled: true },
            { label: "b", value: "b" },
            { label: "C", value: "C" }
        ]

        return (
            <div className="container">i'm a login.
            <hr></hr>
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
                    <div className="col s4">
                        <Select id={'dropdown'}
                            options={this.props.generalStore.selectOptions}
                            defaultValue={{ label: "Select user", value: 0 }}
                            onChange={value => console.log(value)}>
                        </Select>
                    </div>
                </div>
                <AddUser />
            </div>
        )
    }
}

export default Login;