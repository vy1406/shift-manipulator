import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Shift from '../shift/Shift';
import axios from 'axios';

import Slider from '@material-ui/core/Slider';
// import SaveIcon from '@material-ui/icons/Save';

@inject("shiftsStore", "generalStore")
@observer
class GiveOptions extends Component {

    async componentWillMount() {
        const result = await axios.get("http://localhost:8080/weekrequest")
        this.props.shiftsStore.arrOptions = result.data
    }

    registerNumOfWantedShifts = (event, value) => {
        this.props.shiftsStore.numOfWantedShifts = value
    }

    submitShifts = async () => {
        let params =
        {
            arrOptions: this.props.shiftsStore.arrOptions,
            numOfWantedShifts: this.props.shiftsStore.numOfWantedShifts,
            user : this.props.generalStore.curUser
        }

        await axios.post("http://localhost:8080/submitshifts", params)
    }

    renderControls = () => {

        const style = {
            margin: "1vh",
            color: "pink"
        };

        return (
            <div className="row center">
                <div className="col s12 m12 l4">
                    <Slider
                        defaultValue={0}
                        // getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        step={1}
                        style={style}
                        min={0}
                        max={7}
                        valueLabelDisplay="on"
                        onChange={(event, value) => this.registerNumOfWantedShifts(event, value)}
                    />
                    <label>
                        Number of wanted shifts:
                    </label>
                </div>
                <div className="col s12 m12 l4">
                    <a className="waves-effect waves-light btn" onClick={event => console.log(event)}>Do-Something</a>
                </div>
                <div className="col s12 m12 l4">
                    <a className="waves-effect waves-light btn" onClick={this.submitShifts}>Submit</a>
                </div>
            </div>
        )
    }

    render() {
        let arrOptions = this.props.shiftsStore.arrOptions

        return (
            <div className="container">
                <div className="row">
                    {arrOptions.map((option, i) => <Shift key={i} day={i} option={option} />)}
                </div>
                <div className="row">
                    {this.renderControls()}
                </div>
            </div>
        )
    }
}

export default GiveOptions;