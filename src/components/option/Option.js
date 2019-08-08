import React, { Component } from 'react';

class Option extends Component {

    render() {
        return (
            <div>
                <div>{this.props.option.day}</div>
                <div>morning : {this.props.option.morning.toString()}</div>
                <div>evening : {this.props.option.evening.toString()}</div>
                <div>night   :{this.props.option.night.toString()}</div>
                <div>--------</div>
            </div>
        )
    }
}

export default Option;