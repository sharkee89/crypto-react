import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cryptocurrency from './components/Cryptocurrency';
import Config from './config/config';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    navbarItems: Config.NavbarItems,
    cryptocurrency: {},
    prices: [],
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

  getCryptocurrencyState = (response) => {
    return { 
      name: response.data.name,
      price: response ? response.data.price : null,
      rank: response ? response.data.rank : null,
      symbol: response ? response.data.symbol : null,
      marketShare: response ? response.data.marketShare : null,
      lastUpdated: response ? response.data.lastUpdated : null,
    }
  }

  getStateForApp = (response, symbol) => {
    return {
      cryptocurrency: this.getCryptocurrencyState(response),
      isLoading: false
    }
  }

  getStateForNavbarItems = (symbol) => {
    return this.state.navbarItems.map(item => {
      item.selected = item.symbol === symbol;
      return item;
    })
  }

  getCryptocurrencyData(symbol) {
    if (localStorage.getItem(`cryptocurrency-${symbol}`)) {
      this.setState({cryptocurrency: JSON.parse(localStorage.getItem(`cryptocurrency-${symbol}`)), isLoading: false});
      this.setState({navbarItems: this.getStateForNavbarItems(symbol)})
    } else {
      axios.get(`${Config.domain}/cryptocurrencies/${symbol}`)
        .then(response => {
          this.setState(this.getStateForApp(response, symbol));
          this.setState({navbarItems: this.getStateForNavbarItems(symbol)})
          localStorage.setItem(`cryptocurrency-${symbol}`, JSON.stringify(this.state.cryptocurrency));
          localStorage.setItem(`cryptocurrencyDate-${symbol}`, Date.now());
        })
        .catch(error => {
          // this.getPrices(null, symbol);
        });
    }
    this.getPrices(symbol);
  }

  getPrices(symbol) {
    if (localStorage.getItem(`prices-${symbol}`)) {
      this.setState({prices: JSON.parse(localStorage.getItem(`prices-${symbol}`)), graphData: JSON.parse(localStorage.getItem(`graphData-${symbol}`))});
    } else {
      axios.get(`${Config.domain}/cryptocurrencies/${symbol}/prices`)
        .then(res => {
          let tempGraphData = this.getGraphData(res);
          this.setState({prices: res.data, graphData: tempGraphData});
          localStorage.setItem(`prices-${symbol}`, JSON.stringify(this.state.prices));
          localStorage.setItem(`graphData-${symbol}`, JSON.stringify(this.getGraphData(res)));
          localStorage.setItem(`pricesDate-${symbol}`, Date.now());
        });
    }
  }

  componentDidMount() {
    this.getCryptocurrencyData('BTC');
  }

  onSelectMenuItem = (symbol) => {
    this.setState({ isLoading: true });
    this.getCryptocurrencyData(symbol);
  }

  render() {
    return (
      <div className="app">
        <nav>
          <Navbar navbarItems={this.state.navbarItems} onSelectMenuItem={this.onSelectMenuItem} />
        </nav>
        <div className="details-section">
          <div className={`main-section ${this.state.isLoading ? 'is-loading' : ''}`}>
            <Cryptocurrency cryptocurrency={this.state.cryptocurrency} prices={this.state.prices} graphData={this.state.graphData} />
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
