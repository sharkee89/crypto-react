import React, { Component } from 'react';
import Cryptocurrency from './Cryptocurrency';
import { directive } from '@babel/types';

class Cryptocurrencies extends Component {
    render() {
        console.log(this.props.cryptocurrencies);
        return this.props.cryptocurrencies.map((cryptocurrency) => (
            <Cryptocurrency key={cryptocurrency.id} cryptocurrency={cryptocurrency}/>
        ));
    }
}

export default Cryptocurrencies;