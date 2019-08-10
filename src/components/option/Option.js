import React, { Component } from 'react';
import './option.css'
import ToggleSwitch from '../shared/ToggleSwitch';

class Option extends Component {


    render() {
        return (
            <div className="single-option">
                <div className="day">
                    {this.props.option.day}
                </div>
                <div>morning : {this.props.option.morning.toString()}
                    {/* <input ref="switch" checked={true} onChange={this._handleChange} className="switch" type="checkbox" /> */}
                    {/* <ToggleSwitch type="round"/> */}
                </div>
                <div>
                    evening : {this.props.option.evening.toString()}

                </div>
                <div>night   : {this.props.option.night.toString()}

                </div>
            </div>
        )
    }
}

export default Option;