import React, { Component } from 'react';
import SingleUserInfo from '../single-user-info/SingleUserInfo';

class ShiftsInfo extends Component {

    render() {
        return (
            <div className="col">
                {this.props.users.map((u, index) =>
                    <SingleUserInfo key={u.user + index} user={u.user} />
                )}
            </div>
        )
    }
}

export default ShiftsInfo;