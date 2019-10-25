import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <ul className="Navbar">
                <li>Bitcoin</li>
                <li>Etherium</li>
                <li>Safex</li>
                <li>Blue</li>
            </ul>
        )
    }
}

export default Navbar;