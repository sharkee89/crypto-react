import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cryptocurrency extends Component {
    render() {
        return (
            <h1>{this.props.cryptocurrency.name}</h1>
        )
    }
}

Cryptocurrency.propTypes = {
    cryptocurrency: PropTypes.object.isRequired
}

export default Cryptocurrency;