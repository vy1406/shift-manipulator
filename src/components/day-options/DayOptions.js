import React, { Component } from 'react';

class DayOptions extends Component {

    renderSingleOption = (argSingleOption, i) => {
        

        return (
            <div className="row" key={argSingleOption + i}>
                <div className="col s6 m6 l6">{argSingleOption}</div>
                <div className="col s6 m6 l6">
                    
                </div>
            </div>
        )
    }

    render() {
        let arrPossibleOptions = ["Morning", "Evening", "Night"]

        return (
            <div className="col s12 m6 l3">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.day}</span>
                        <hr color="aqua"></hr>
                        {arrPossibleOptions.map((singleOption, i) => this.renderSingleOption(singleOption, i))}
                    </div>
                </div>
            </div>
        )
    }
}

export default DayOptions;