import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class SimpleBarChart extends Component {

    render() {

        const data = [
            {
                user: 'velisave', numOfWantedShifts: 4, numOfCurrentShifts: 5
            },
            {
                user: 'shargaev', numOfWantedShifts: 3, numOfCurrentShifts: 4
            },
            {
                user: 'osipov', numOfWantedShifts: 2, numOfCurrentShifts: 6
            },
            {
                user: 'eeloz', numOfWantedShifts: 6, numOfCurrentShifts: 3
            }
        ]

        const dataToChar = this.props.data
        return (
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="user" />
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