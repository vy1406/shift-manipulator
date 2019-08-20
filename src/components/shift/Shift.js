import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("shiftsStore")
@observer
class Shift extends Component {

    getDayOfWeek = () => {
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return weekDays[this.props.day]
    }

    onChangeOption = (event, argSingleOption, i) => {
        console.log(argSingleOption + "," + i + "," + this.props.day + "," + event.target.checked)
    }

    renderSingleOption = (argSingleOption, i) => {
        return (
            <div className="row" key={argSingleOption + i}>
                <div className="col s6 m6 l6">{argSingleOption}</div>
                <div className="col s6 m6 l6">
                    <div className="switch">
                        <label>
                            <input type="checkbox" defaultChecked={true} onChange={(event) => this.onChangeOption(event, argSingleOption, i)}></input>
                            <span className="lever"></span>
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

    makeDayOff = () => {
        console.log()
    }

    copyDay = () => {
        this.props.shiftsStore.copyDay({Morning: false, Evening:true, Night:false})
        console.log(this.props.shiftsStore.copiedDay.Morning)
    }

    renderCardOptions = () => {
        return (
            <div className="card-action">
                <div className="row">
                    <a className="waves-effect waves-light btn col s3 m3 l3" onClick={this.copyDay}>Copy</a>
                    <div className="col s1 m1 l1"></div>
                    <a className="waves-effect waves-light btn col s3 m3 l3">Paste</a>
                    <div className="col s1 m1 l1"></div>
                    <a className="waves-effect waves-light btn col s3 m3 l3">D-off</a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="col s12 m6 l4">
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