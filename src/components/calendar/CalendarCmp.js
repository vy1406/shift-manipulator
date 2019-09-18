import React, { Component } from 'react';
import {
    Calendar,
    momentLocalizer
} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { observer, inject } from 'mobx-react'
const localizer = momentLocalizer(moment)



@inject("generalStore", "buildShiftStore")
@observer
class CalendarCmp extends Component {

    async componentDidMount() {
        let user = this.props.generalStore.loggedUser = "velisave"
        await this.props.buildShiftStore.getAllRosters()
        console.log(this.props.buildShiftStore.calendarEvents)
    }
    
    handleSelectEvent(event, target) {
        let obj = target.currentTarget;
        console.log(obj)
        console.log(event)
    }

    render() {

        return (
            <div style={{ height: '500pt' }}>
                <Calendar
                    onSelectEvent={this.handleSelectEvent}
                    events={this.props.buildShiftStore.calendarEvents}
                    startAccessor="start"
                    endAccessor="end"
                    defaultDate={moment().toDate()}
                    localizer={localizer}
                />
            </div>
        )
    }
}

export default CalendarCmp;