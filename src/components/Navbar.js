import React, { Component } from 'react';
import NavbarItems from '../config/config';
import NavbarItem from './NavbarItem';
import './Navbar.css';

class Navbar extends Component {

    state = {
        navbarItems: NavbarItems
    }

    onSelectMenuItem = (symbol) => {
        console.log(symbol);
        this.setState({ navbarItems: this.state.navbarItems.map(item => {
            if (item.symbol === symbol) {
                item.selected = true;
            } else {
                item.selected = false
            }
            return item;
        })});
    }

    render() {
        return (
            <div>
                <h3>Crypto</h3>
                <ul className="Navbar">
                    {this.state.navbarItems.map((navbarItem) => {
                        return <NavbarItem key={navbarItem.id} navbarItem={navbarItem} onSelectMenuItem={this.onSelectMenuItem} />;
                    })}
                </ul>
            </div>
        )
    }
}

export default Navbar;