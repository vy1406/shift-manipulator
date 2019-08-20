import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <div className="switch">
                    <label>
                        Off
                    <input type="checkbox"></input>
                        <span class="lever"></span>
                        On
    </label>
                </div>
            </div>
        )
    }
}

export default About;