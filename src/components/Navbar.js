import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <h3>Crypto</h3>
                <ul className="Navbar">
                    <li>Bitcoin</li>
                    <li>Etherium</li>
                    <li>Safex</li>
                    <li>Blue</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;