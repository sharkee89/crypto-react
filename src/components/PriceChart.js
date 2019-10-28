import React from 'react';
import { Line } from 'react-chartjs-2';


class PriceChart extends React.Component {
    render() {
        console.log(this.props.graphData);
        return (
            <Line
                data={this.props.graphData}
                options={{ maintainAspectRatio: false }}
            />
        );
    }
}

export default PriceChart;