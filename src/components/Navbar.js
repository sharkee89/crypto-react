import React, { Component } from 'react';
import NavbarItems from '../config/config';
import NavbarItem from './NavbarItem';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div>
                <h3>Crypto</h3>
                <ul className="Navbar">
                    {this.props.navbarItems.map((navbarItem) => {
                        return <NavbarItem key={navbarItem.id} navbarItem={navbarItem} onSelectMenuItem={this.props.onSelectMenuItem} />;
                    })}
                </ul>
            </div>
        )
    }
}

export default Navbar;