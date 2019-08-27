import React, { Component } from 'react';
import DayOptions from '../day-options/DayOptions';
import axios from 'axios';
import Loader from '../shared/Loader';
import ShiftsInfo from '../build-shift-info/ShiftsInfo';
import ShiftsChart from '../charts/ShiftsChart';
import SimpleBarChart from '../charts/SimpleBarChart';

class BuildWeek extends Component {

    constructor() {
        super()
        this.state = {
            arrUsers: [],
            arrShifts: [],
            arrShiftSketch: [],

            isReady: false // flag to reload the page when the objects are ready.
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
    createShiftsSketch = async () => {
        let userPerDayOptions
        let arrResult = []
        for (let i = 0; i < 7; i++) {
            userPerDayOptions = this.getUsersPerDay(i)
            arrResult.push(userPerDayOptions)
        }

        this.setState({ arrShiftSketch: arrResult, isReady: true })
    }

    getUsersPerDay = dayIndex => {
        //let arrPossibleOptions = ["Morning", "Evening", "Night"]

        let result = {
            "Morning": [],
            "Evening": [],
            "Night": []
        }

        let _ = this.state
        for (let i = 0; i < _.arrUsers.length; i++) {
            for (let j = 0; j < _.arrShifts.length; j++) {
                if (_.arrUsers[j].user === _.arrShifts[i].user) {
                    // _.arrUsers[j]["numOfWantedShifts"] = _.arrShifts[i].numOfWantedShifts
                    // console.log(_.arrUsers[j])
                    console.log("lol")
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

    getWorkersByDay = dayIndex => this.state.arrShiftSketch[dayIndex]

    renderOptions = () => {
        let arrWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            arrWeekDays.map((day, i) =>
                <DayOptions key={day + "" + i}
                    dayWorkerOptions={this.getWorkersByDay(i)}
                    day={day} />)
        )
    }

    createDataForChart = () => {
        let _ = this.state
        let charData = []
        for (let i = 0; i < _.arrUsers.length; i++) {
            for (let j = 0; j < _.arrShifts.length; j++) {
                if (_.arrUsers[j].user === _.arrShifts[i].user)
                    charData.push({
                        user : _.arrShifts[j].user,
                        fullName : _.arrUsers.name.
                        numOfWantedShifts : _.arrShifts[i].numOfWantedShifts,
                        numOfCurrentShits : 0
                    })
            }
        }
        
        return charData
    }

    render() {
        return (
            <div>
                {this.state.isReady ?
                    <div className="row">
                        <div className="col s12 m8 l8">
                            {this.renderOptions()}
                        </div>
                        <div className="col s12 m4 l4">
                            <div className="row">
                                <ShiftsInfo users={this.state.arrUsers} />
                            </div>
                            <div className="row">
                                <SimpleBarChart data={this.createDataForChart()} />
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