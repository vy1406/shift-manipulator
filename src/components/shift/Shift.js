import React, { Component } from 'react';

class Shift extends Component {

    weekDay = () => {
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return weekDays[this.props.day]
    }
    render() {
        return (
            <div>
                <div className="col s12 m6 l3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.weekDay()}</span>
                            <div className="row">
                                <div className="col s6 m6 l6">Morning</div>
                                <div className="col s6 m6 l6">false</div>
                            </div>
                            <div className="row">
                                <div className="col s6 m6 l6">Evening</div>
                                <div className="col s6 m6 l6">false</div>
                            </div>
                            <div className="row">
                                <div className="col s6 m6 l6">Night</div>
                                <div className="col s6 m6 l6">false</div>
                            </div>
                        </div>
                        <div className="card-action">
                            <a href="#">{this.props.option}</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shift;