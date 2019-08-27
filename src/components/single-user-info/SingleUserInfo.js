import React, { Component } from 'react';

class SingleUserInfo extends Component {

    render() {
        return (
            <div className="col s6 m6 l3">
                {this.props.user}
            </div>
        )
    }
}

export default SingleUserInfo;