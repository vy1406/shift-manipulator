import React, { Component } from 'react';
import Option from '../option/Option';
import '../worker/worker.css';

class Worker extends Component {

    render() {
        return (
            <div className="single-worker">
                <div className="workerName">{this.props.worker.name}</div>
                <div className="list-options">
                    {this.props.worker.options.map((option, i) => <Option key={i} option={option} />)}
                </div>
            </div>
        )
    }
}

export default Worker;