import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Worker from '../worker/Worker';
import axios from 'axios';

import '../menu/menu.css';

@inject("optionsStore")
@observer
class Menu extends Component {

    constructor() {
        super()
        this.state = {
            workers: []
        }
    }

    async componentWillMount() {
        const result = await axios.get("http://localhost:8080/options")
        this.setState({
            workers: result.data
        })
    }

    render() {
        return (
            <div className="menu">
                <div className="workers-list">
                    {this.state.workers.map((worker, i) => <Worker key={i + worker.name} worker={worker} />)}
                </div>
            </div >
        )
    }
}

export default Menu;