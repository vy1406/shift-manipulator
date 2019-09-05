import React, { Component } from 'react';

class CalendarCmp extends Component {

    //https://calendar.google.com/calendar?cid=eXZvdmE4OEB5YWhvby5jb20
    
    render() {
        return (
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=yvova88%40yahoo.com&ctz=Asia%2FJerusalem" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        )
    }
}

export default CalendarCmp;