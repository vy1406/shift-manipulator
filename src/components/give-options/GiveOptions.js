import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Shift from '../shift/Shift';
import axios from 'axios';

@inject("shiftsStore")
@observer
class GiveOptions extends Component {

    async componentWillMount() {
        const result = await axios.get("http://localhost:8080/weekrequest")
        this.props.shiftsStore.arrOptions = result.data
    }

    render() {
        let arrOptions = this.props.shiftsStore.arrOptions

        return (
            <div className="row">
                {arrOptions.map((option, i) => <Shift key={i} day={i} />)}
            </div>
        )
    }
}

export default GiveOptions;