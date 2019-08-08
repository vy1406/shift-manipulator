import React, { Component } from 'react';
import Option from '../option/Option';

class Worker extends Component {

    render() {
        return (
            <div>
                {this.props.worker.name}
                <div>
                    {this.props.worker.options.map((option, i) => <Option key={i} option={option} />)}
                </div>
            </div>
        )
    }
}

export default Worker;