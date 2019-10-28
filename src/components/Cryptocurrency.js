import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CryptocurrencyPrice from './CryptocurrencyPrice';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.cryptocurrency.name}</h1>
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