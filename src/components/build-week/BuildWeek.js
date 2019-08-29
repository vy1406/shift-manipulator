import React, { Component } from 'react';
import DayOptions from '../day-options/DayOptions';
import axios from 'axios';
import Loader from '../shared/Loader';
import SimpleBarChart from '../charts/SimpleBarChart';
import { observer, inject } from 'mobx-react'

@inject("buildShiftStore")
@observer
class BuildWeek extends Component {

    async componentWillMount() {

        const response_users = await axios.get("http://localhost:8080/users")
        const arrShifts = await axios.get("http://localhost:8080/shiftrequests")

        const arrUsers = response_users.data.map(u => { return { user: u.user, name: u.name, lastName: u.lastName } })
        this.props.buildShiftStore.initBuildStore(arrShifts.data[0].arrOptions.length,  arrUsers, arrShifts.data)
        this.createShiftsSketch()
    }

    /*
    returning array of days:
    [{ "Morning": [user1,user2,user3],
       "Evening": [user1],
       "Night"  : [user2,user4] },
     { "Morning": ...}
    ]

    */
    createShiftsSketch = async () => {

        let userPerDayOptions
        let arrResult = []
        for (let i = 0; i < 7; i++) {
            userPerDayOptions = this.getUsersPerDay(i)
            arrResult.push(userPerDayOptions)
        }

        this.props.buildShiftStore.arrShiftSketch = arrResult
        this.props.buildShiftStore.isReady = true
    }

    getUsersPerDay = dayIndex => {

        let result = {
            "Morning": [],
            "Evening": [],
            "Night": []
        }

        let _ = this.props.buildShiftStore
        for (let i = 0; i < _.arrUsers.length; i++) {
            for (let j = 0; j < _.arrShifts.length; j++) {
                if (_.arrUsers[j].user === _.arrShifts[i].user) {
                    if (_.arrShifts[i].arrOptions[dayIndex]["Morning"] === true)
                        result["Morning"].push(_.arrUsers[j].user)
                    if (_.arrShifts[i].arrOptions[dayIndex]["Evening"] === true)
                        result["Evening"].push(_.arrUsers[j].user)
                    if (_.arrShifts[i].arrOptions[dayIndex]["Night"] === true)
                        result["Night"].push(_.arrUsers[j].user)
                }
            }
        }

        return result
    }

    getWorkersByDay = dayIndex => this.props.buildShiftStore.arrShiftSketch[dayIndex]

    renderOptions = () => {

        let arrWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            arrWeekDays.map((day, i) =>
                <DayOptions key={day + "" + i}
                    dayWorkerOptions={this.getWorkersByDay(i)}
                    day={day}
                    dayIndex={i} />)
        )
    }

    renderControls = () => {
        return (
            <div>
                <a className="waves-effect waves-light btn" onClick={this.submitShifts}><i className="material-icons right">cloud</i>Submit Shifts</a>
            </div>
        )
    }

    submitShifts = () => {
        this.props.buildShiftStore.submitShifts()
    }

    render() {
        return (
            <div>
                {this.props.buildShiftStore.isReady ?
                    <div className="row">
                        <div className="col s12 m8 l8">
                            {this.renderOptions()}
                        </div>
                        <div className="col s12 m4 l4">
                            <div className="row">
                                {console.log("Render here some user mood...")}
                                {/* <ShiftsInfo users={this.state.arrUsers} /> */}
                            </div>
                            <div className="row">
                                <SimpleBarChart />
                            </div>
                            <div className="row">
                                {this.renderControls()}
                            </div>
                        </div>
                    </div>
                    :
                    <Loader />
                }
            </div>
        )
    }
}

export default BuildWeek;