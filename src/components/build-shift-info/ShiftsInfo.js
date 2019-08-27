import React, { Component } from 'react';

class ShiftsInfo extends Component {

    render() {
        return (
            <div className="col">
                {this.props.users.map((user, index) =>
                    <SingleUserInfo user={user} />
                )}
            </div>
        )
    }
}

export default ShiftsInfo;