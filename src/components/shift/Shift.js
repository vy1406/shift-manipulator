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
        this.props.shiftsStore.onChangeSingleOption(event.target.checked, argSingleOption, i, this.props.day)
    }

    renderSingleOption = (argSingleOption, i) => {
        let checkBoxValue = this.props.shiftsStore.weekRequestObj.arrOptions[this.props.day][argSingleOption]

        return (
            <div className="row" key={argSingleOption + i}>
                <div className="col s6 m6 l6"><span className="shift">{argSingleOption}</span></div>
                <div className="col s6 m6 l6">
                    <div className="switch">
                        <label>
                            <input type="checkbox" checked={checkBoxValue} onChange={(event) => this.onChangeOption(event, argSingleOption, i)}></input>
                            {/* <span className="lever"></span> */}
                            {/* uncomment this to make the switch */}
                            <span className=""></span>
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
                <span className="card-title flow-text">{this.getDayOfWeek()}</span>
                <hr color="aqua"></hr>
                {arrPossibleOptions.map((singleOption, i) => this.renderSingleOption(singleOption, i))}
            </div>
        )
    }

    makeDayOff = () => {
        console.log(this.props.shiftsStore.weekRequestObj.arrOptions[this.props.day])
        this.props.shiftsStore.makeDayOff(this.props.day)
    }

    copyDay = () => this.props.shiftsStore.copyDay(this.props.day)

    isPasteDisabled = () => this.props.shiftsStore.copiedDay === "" ? true : false

    pasteDay = () => {
        this.props.shiftsStore.pasteDay(this.props.day)
        console.log(this.props.shiftsStore.weekRequestObj.arrOptions)
    }


    renderCardOptions = () => {
        return (
            <div className="card-action">
                <div className="row">
                    <a className="waves-effect waves-light btn col s3 m3 l3" onClick={this.copyDay}>Copy</a>
                    <div className="col s1 m1 l1"></div>
                    <a className="waves-effect waves-light btn col s3 m3 l3" disabled={this.isPasteDisabled()} onClick={this.pasteDay}>Paste</a>
                    <div className="col s1 m1 l1"></div>
                    <a className="waves-effect waves-light btn col s3 m3 l3" onClick={(event) => this.makeDayOff(event)}>D-off</a>
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