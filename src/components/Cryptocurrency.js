import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CryptocurrencyPrice from './CryptocurrencyPrice';
import './Cryptocurrency.css';
import Config from '../config/config';
import PriceChart from './PriceChart';


class Cryptocurrency extends Component {
    render() {
        console.log(this.props.cryptocurrency);
        return (
            <div className="cryptocurrency">
                <div className="main-data">
                    <div className="details">
                        
                            <div><h1>{this.props.cryptocurrency.name}</h1></div>
                            <div className="rank">#{this.props.cryptocurrency.rank}</div>
                            <div><h3>${this.props.cryptocurrency.price}</h3></div>
                            <div>{this.props.cryptocurrency.marketShare}</div>
                            <div>{this.props.cryptocurrency.lastUpdated}</div>
                        
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