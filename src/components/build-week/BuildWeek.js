import React, { Component } from 'react';
import DayOptions from '../day-options/DayOptions';
import axios from 'axios';

class BuildWeek extends Component {

    constructor() {
        super()
        this.state = {
            arrUsers: [],
            arrShifts: [],
            arrShiftSketch: []
        }
    }

    async componentWillMount() {
        const response_users = await axios.get("http://localhost:8080/users")
        const arrUsers = response_users.data.map(u => { return { user: u.user } })

        const arrShifts = await axios.get("http://localhost:8080/shiftrequests")

        await this.setState({ arrUsers, arrShifts: arrShifts.data })

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
    createShiftsSketch = () => {
        let userPerDayOptions
        let arrResult = []
        for (let i = 0; i < 7; i++) {
            userPerDayOptions = this.getUsersPerDay(i)
            arrResult.push(userPerDayOptions)
        }
        console.log(this.state.arrUsers)
        console.log(this.state.arrShifts)
        console.log(arrResult)
        this.setState({ arrShiftSketch: arrResult })
    }

    getUsersPerDay = dayIndex => {
        let result = {
            "Morning": [],
            "Evening": [],
            "Night": []
        }

        let _ = this.state
        for (let i = 0; i < _.arrShifts.length; i++) {
            for (let j = 0; j < _.arrUsers.length; j++) {
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

    getWorkersByDay = (dayIndex) => {
        let workers = {}

        return workers
    }

    render() {
        let arrWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            <div className="row">
                {arrWeekDays.map((day, i) => <DayOptions users={this.getWorkersByDay(i)} day={day} />)}
            </div>
        )
    }
}

export default BuildWeek;