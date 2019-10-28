import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CryptocurrencyPrice.css';

class CryptocurrencyPrice extends Component {
    render() {
        return (
            <div className="price">
                <h3>{this.props.price.price}</h3>
                <h6>{this.props.price.date}</h6>
            </div>
        )
    }
}

CryptocurrencyPrice.propTypes = {
    price: PropTypes.object.isRequired
}

export default CryptocurrencyPrice;