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
    },
    graphData: {},
    isLoading: true
  }

  getGraphData = (res) => {
    return {
      labels: res.data.map((price) => {
        return `${new Date(price.date).getDate()}.${new Date(price.date).getMonth() + 1}.${new Date(price.date).getFullYear()} ${new Date(price.date).getHours()}:${new Date(price.date).getMinutes()}`;
      }),
      datasets: [{
        label: `${res.data[0].name} Prices`,
        data: res.data.map((price) => {
          return price.price;
        })
      }]
    };
  }

  getCryptocurrencyState = (response, res) => {
    return { 
      name: res.data[0].name,
      price: response.data.price,
      rank: response.data.rank,
      symbol: response.data.symbol,
      marketShare: response.data.marketShare,
      lastUpdated: response.data.lastUpdated,
      prices: res.data 
    }
  }

  getStateForApp = (response, res, tempGraphData, symbol) => {
    return {
      navbarItems: this.state.navbarItems.map(item => {
        item.selected = item.symbol === symbol;
        return item;
      }),
      cryptocurrency: this.getCryptocurrencyState(response, res),
      isLoading: false,
      graphData: tempGraphData
    }
  }

  componentDidMount() {
    axios.get(`${Config.domain}/cryptocurrencies/BTC`)
      .then(response => {
        axios.get(`${Config.domain}/cryptocurrencies/BTC/prices`)
          .then(res => {
            let tempGraphData = this.getGraphData(res);
            this.setState(this.getStateForApp(response, res, tempGraphData, 'BTC'));
          });
      });
  }

  onSelectMenuItem = (symbol) => {
    this.setState({ isLoading: true });
    axios.get(`${Config.domain}/cryptocurrencies/${symbol}`)
      .then(response => {
        axios.get(`${Config.domain}/cryptocurrencies/${symbol}/prices`)
        .then(res => {
          let tempGraphData = this.getGraphData(res);
          this.setState(this.getStateForApp(response, res, tempGraphData, symbol));
        })
      });
  }

  render() {
    return (
      <div className="app">
        <nav>
          <Navbar navbarItems={this.state.navbarItems} onSelectMenuItem={this.onSelectMenuItem} />
        </nav>
        <div className="details-section">
          <div className={`main-section ${this.state.isLoading ? 'is-loading' : ''}`}>
            <Cryptocurrency cryptocurrency={this.state.cryptocurrency} graphData={this.state.graphData} />
          </div>
          <div className={`loader ${this.state.isLoading ? 'is-loading' : ''}`}>
            <div className="icon"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
