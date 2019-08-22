import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Shift from '../shift/Shift';
import axios from 'axios';
import InputRange from 'react-input-range';
import '../../../node_modules/react-input-range/lib/css/index.css'
import Slider from '@material-ui/core/Slider';

@inject("shiftsStore")
@observer
class GiveOptions extends Component {

    async componentWillMount() {
        const result = await axios.get("http://localhost:8080/weekrequest")
        this.props.shiftsStore.arrOptions = result.data
    }

    renderControls = () => {

        const style = {
            color: "pink"
        };

        return (
            <div className="row">
                <div className="col s6 m6 l6">
                    <Slider
                        defaultValue={0}
                        // getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        style={style}
                        min={0}
                        max={10}
                    />
                </div>
                <div classNamee="col s6 m6 l6">
                    
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