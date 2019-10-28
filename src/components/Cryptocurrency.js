import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CryptocurrencyPrice from './CryptocurrencyPrice';
import './Cryptocurrency.css';
import Config from '../config/config';
import PriceChart from './PriceChart';


class Cryptocurrency extends Component {

    render() {
        return (
            <div className="cryptocurrency">
                <div className="main-data">
                    <div className="details">
                        <h1>{this.props.cryptocurrency.name}</h1>
                    </div>
                    <div className="chart">
                        <PriceChart graphData={this.props.graphData} />
                    </div>
                </div>
                <div className="prices">
                    {this.props.cryptocurrency.prices.map((price) => {
                        return <CryptocurrencyPrice key={price['_id']} price={price}/>;
                    })}
                </div>
            </div>
        )
    }
}

Cryptocurrency.propTypes = {
    cryptocurrency: PropTypes.object.isRequired
}

export default Cryptocurrency;