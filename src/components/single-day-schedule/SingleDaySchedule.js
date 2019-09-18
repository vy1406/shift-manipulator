import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("generalStore")
@observer
class SingleDaySchedule extends Component {


    getDayOfWeek = () => {
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return weekDays[this.props.day]
    }

    classNameByUser = (argSingleOption) => {
        let result = "col s6 m6 l6"
        result += this.props.schedule[argSingleOption] === this.props.generalStore.loggedUser.user ? " cyan-text lighten-3" : null
        return result
    }

    renderSingleWorker = (argSingleOption, i) => {
        return (
            <div className="row" key={argSingleOption + i}>
                <div className="col s6 m6 l6"><span className="shift">{argSingleOption}</span></div>
                <div className={this.classNameByUser(argSingleOption)}>{this.props.schedule[argSingleOption]}</div>
            </div>
        )
    }

    render() {
        let arrPossibleOptions = Object.keys(this.props.schedule)
        return (
            <div>
                <div className="col s12 m6 l4">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.getDayOfWeek()}</span>
                            <hr color="aqua"></hr>
                            {arrPossibleOptions.map((singleOption, i) => this.renderSingleWorker(singleOption, i))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleDaySchedule;