import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class SimpleBarChart extends Component {

    render() {

        const dataToChar = this.props.data
        
        return (
            <BarChart
                width={400}
                height={300}
                data={dataToChar}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fullName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="numOfCurrentShifts" fill="#8884d8" />
                <Bar dataKey="numOfWantedShifts" fill="#82ca9d" />
            </BarChart>
        )
    }
}

export default SimpleBarChart;