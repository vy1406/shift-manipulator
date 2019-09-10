import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Shift from '../shift/Shift';
import axios from 'axios';

import Slider from '@material-ui/core/Slider';
import CustomFab from '../shared/CustomFab';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

@inject("shiftsStore", "generalStore")
@observer
class GiveOptions extends Component {

    async componentWillMount() {
        const result = await axios.get("http://localhost:8080/weekrequest")
        this.props.shiftsStore.weekRequestObj.arrOptions = result.data.arrOptions
    }

    registerNumOfWantedShifts = (event, value) => {
        this.props.shiftsStore.numOfWantedShifts = value
    }

    submitShifts = async () => {
        let params =
        {
            arrOptions: this.props.shiftsStore.weekRequestObj.arrOptions,
            numOfWantedShifts: this.props.shiftsStore.numOfWantedShifts,
            user: this.props.generalStore.loggedUser.user
        }
        await axios.post("http://localhost:8080/submitshifts", params)
        this.notifyShiftSubmitted()
    }

    notifyShiftSubmitted = () => toast('Shifts Submitted...');

    renderControls = () => {

        const style = {
            color: "#26A69A",
            marginTop: '15px',
            width: "95%"
        };

        const styleButton = {
            width: "100%"
        }

        const margin = {
            marginTop: '10px'
        }

        return (
            <div className="row">
                <div className="col s12 m12 l4">
                    <div className="row">
                        <label>
                            Number of wanted shifts:
                        </label>
                    </div>
                    <div className="row">
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
                    </div>
                </div>
                <div clasSName="row" >
                    <div className="col s12 m12 l4" style={margin}>
                        <div className="form-field">
                            <button className="btn-large waves-effect waves-dark" style={styleButton}
                                onClick={this.notifyShiftSubmitted}>Do-Something</button>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col s12 m12 l4" style={margin}>
                        <div className="form-field">
                            <button className="btn-large waves-effect waves-dark" style={styleButton}
                                onClick={this.submitShifts}>Submit</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    render() {
        let options = this.props.shiftsStore.weekRequestObj.arrOptions
        console.log(options)
        return (
            <div className="container">
                <div className="row">
                    {options.map((option, i) => <Shift key={i} day={i} option={option} />)}
                </div>
                <div className="row">
                    {this.renderControls()}
                </div>
                <div>
                    <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
                </div>
            </div>
        )
    }
}
export default GiveOptions;