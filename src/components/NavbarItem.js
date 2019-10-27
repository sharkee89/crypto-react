import React, { Component } from 'react';

class NavbarItem extends Component {

    onSelectMenuItem = () => {
        console.log(this.props.navbarItem);
    }

    getStyle = () => {
        return {
            backgroundColor: this.props.navbarItem.selected ? 'rgba(255, 255, 255, .6)' : '',
            boxShadow: this.props.navbarItem.selected ? '0px 3px darkslategrey' : 'none'    
        }
    }

    render() {
        return (
            <li 
                key="{this.props.navbarItem.id}"
                onClick={()=>this.props.onSelectMenuItem(this.props.navbarItem.symbol)}
                style={this.getStyle()}>
                    {this.props.navbarItem.name}
            </li>
        )
    }
}

export default NavbarItem;