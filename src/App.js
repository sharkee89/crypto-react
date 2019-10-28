import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cryptocurrency from './components/Cryptocurrency';
import Config from './config/config';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    navbarItems: Config.NavbarItems,
    cryptocurrency: {
      prices: []
    }
  }

  componentDidMount() {
    axios.get(`${Config.domain}/cryptocurrencies/BTC/prices`)
      .then(res => {
        this.setState({cryptocurrency: {name: res.data[0].name, prices: res.data}});
      });
  }

  onSelectMenuItem = (symbol) => {
    axios.get(`${Config.domain}/cryptocurrencies/${symbol}/prices`)
      .then(res => {
        this.setState({ navbarItems: this.state.navbarItems.map(item => {
            if (item.symbol === symbol) {
                item.selected = true;
            } else {
                item.selected = false
            }
            return item;
        })});
        this.setState({cryptocurrency: {name: res.data[0].name, symbol: symbol, prices: res.data}});
      })
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
