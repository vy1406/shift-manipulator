import React, { Component } from 'react';

class Shift extends Component {

    getDayOfWeek = () => {
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return weekDays[this.props.day]
    }

    renderSingleOption = (argSingleOption, i) => {
        return (
            <div className="row">
                <div className="col s6 m6 l6">{argSingleOption}</div>
                <div className="col s6 m6 l6">
                    <div className="switch">
                        <label>
                            <input type="checkbox"></input>
                            <span class="lever"></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }

    renderDayOptions = () => {
        let arrPossibleOptions = ["Morning", "Evening", "Night"]
        return (
            <div className="card-content white-text">
                <span className="card-title">{this.getDayOfWeek()}</span>
                <hr color="aqua"></hr>
                {arrPossibleOptions.map((singleOption, i) => this.renderSingleOption(singleOption, i))}
            </div>
        )
    }

    renderCardOptions = () => {
        return (
            <div className="card-action">
                <div className="row">
                    <a className="waves-effect waves-light btn col s5 m5 l5">CopyDay</a>
                    <div className="col s2 m2 l2"></div>
                    <a className="waves-effect waves-light btn col s5 m5 l5">Day Off</a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="col s12 m6 l3">
                    <div className="card blue-grey darken-1">
                        {this.renderDayOptions()}
                        {this.renderCardOptions()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Shift;