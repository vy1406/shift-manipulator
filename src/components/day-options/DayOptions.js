import React, { Component } from 'react';
import Select from 'react-select';
import { observer, inject } from 'mobx-react'

@inject("buildShiftStore")
@observer
class DayOptions extends Component {

    renderSingleOption = (argSingleOption, i) => {
        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'black' : 'blue'
            }),
            // control: () => ({
            //     // none of react-select's styles are passed to <Control />
                
            // }),
            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = 'opacity 300ms';

                return { ...provided, opacity, transition };
            }
        }
        return (
            <div className="row" key={argSingleOption + i}>
                <div className="col s6 m6 l6"><span className="shift">{argSingleOption}</span></div>
                <div className="col s6 m6 l6">
                    <Select id={"dropdown-" + this.props.day}
                        options={this.createDropDownUserList(argSingleOption)}
                        defaultValue={{ label: "Select...", value: 0 }}
                        styles={customStyles}
                        onChange={value => this.props.buildShiftStore.chooseUser(value.value, argSingleOption,this.props.dayIndex)}>
                    </Select>
                </div>
            </div>
        )
    }

    createDropDownUserList = day => this.props.dayWorkerOptions[day].map(u => { return { label: u, value: u } })

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