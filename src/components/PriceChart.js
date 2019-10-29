import React from 'react';
import { Line } from 'react-chartjs-2';


class PriceChart extends React.Component {
    render() {
        return (
            <Line
                data={this.props.graphData}
                options={{ maintainAspectRatio: false }}
            />
        );
    }
}

export default PriceChart;