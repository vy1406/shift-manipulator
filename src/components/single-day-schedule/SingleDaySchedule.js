import React, { Component } from 'react';

class SingleDaySchedule extends Component {

    getDayOfWeek = () => {
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return weekDays[this.props.day]
    }

    renderSingleWorker = (argSingleOption, i) => {

        console.log(argSingleOption)
        return (
            <div className="row" key={argSingleOption + i}>
                <div className="col s6 m6 l6">{argSingleOption}</div>
                <div className="col s6 m6 l6">{this.props.schedule[argSingleOption]}            </div>
            </div>
        )
    }

    render() {
        let arrPossibleOptions = Object.keys(this.props.schedule)
        console.log(arrPossibleOptions)
        return (

            <div className="col s12 m6 l4">
                <div className="card blue-grey darken-1">
                    <span className="card-title">{this.getDayOfWeek()}</span>
                    <hr color="aqua"></hr>
                    {arrPossibleOptions.map((singleOption, i) => this.renderSingleWorker(singleOption, i))}
                </div>
            </div>
        )
    }
}

export default SingleDaySchedule;