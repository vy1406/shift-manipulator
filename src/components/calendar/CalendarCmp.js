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

    constructor() {
        super()
        this.state = {
            events: [
                {
                    id: 0,
                    title: 'All Day Event very long title',
                    allDay: true,
                    start: new Date(2019, 6, 0),
                    end: new Date(2019, 6, 1),
                },
                {
                    id: 1,
                    title: 'Long Event',
                    start: new Date(2019, 3, 7),
                    end: new Date(2019, 3, 10),
                },
                {
                    id: 2,
                    title: 'Right now Time Event',
                    start: new Date(),
                    end: new Date(),
                },
                {
                    id: 6,
                    title: 'Meeting',
                    start: new Date(2015, 3, 12, 10, 30, 0, 0),
                    end: new Date(2015, 3, 12, 12, 30, 0, 0),
                    desc: 'Pre-meeting meeting, to prepare for the meeting',
                },
            ]
        };
    }

    async componentDidMount() {
        let user = this.props.generalStore.loggedUser = "velisave"
        await this.props.buildShiftStore.getLoggedUserRosters(user)
        console.log(this.props.buildShiftStore.calendarEvents)
        // let events = this.props.buildShiftStore.fillCalendarEventsWithRosters(rosters)
        // console.log(rosters)
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