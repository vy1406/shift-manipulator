import React, { Component } from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react'
import SingleDaySchedule from '../single-day-schedule/SingleDaySchedule';

@inject("workScheduleStore")
@observer
class WorkSchedule extends Component {

    constructor() {
        super()
        this.state = {
            workSchedule: {shifts : []}
        }
    }
    async componentWillMount() {
        const result = await axios.get("http://localhost:8080/workschedule")
        await this.setState({ workSchedule: result.data[0] })
    }

    render() {
        return (
            <div className="row">
                {this.state.workSchedule.shifts.map((schedule, i) => <SingleDaySchedule key={i} day={i} schedule={schedule} />)}
            </div>
        )
    }
}

export default WorkSchedule;