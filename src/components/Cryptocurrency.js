import React, { Component } from 'react'

export class Cryptocurrency extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.cryptocurrency.name}</h3>
                <h5>{this.props.cryptocurrency.price}</h5>
            </div>
        )
    }
}

export default Cryptocurrency