import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cryptocurrency from './components/Cryptocurrency';
import NavbarItems from './config/config';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    navbarItems: NavbarItems,
    cryptocurrency: { id: 1, name: 'Bitcoin', price: 8654 }
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
      <div className="App">
        <nav>
          <Navbar navbarItems={this.state.navbarItems} onSelectMenuItem={this.onSelectMenuItem} />
        </nav>
        <div>
          <Cryptocurrency cryptocurrency={this.state.cryptocurrency} />
        </div>
      </div>
    )
  }
}

export default App;
