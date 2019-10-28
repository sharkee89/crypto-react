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
    graphData: Config.graphSampleData,
    isLoading: true
  }

  componentDidMount() {
    axios.get(`${Config.domain}/cryptocurrencies/BTC/prices`)
      .then(res => {
        this.setState({
          cryptocurrency: {name: res.data[0].name, prices: res.data},
          isLoading: false,
          graphData: [{
            id: res.data[0].name,
            color: 'hsl(1, 70%, 50%)',
            data: res.data.map(price => {
              return {x: price.date, y: price.price}
            })
          }]
        });
      });
  }

  onSelectMenuItem = (symbol) => {
    this.setState({isLoading: true});
    axios.get(`${Config.domain}/cryptocurrencies/${symbol}/prices`)
      .then(res => {
        this.setState({ 
          navbarItems: this.state.navbarItems.map(item => {
            item.selected = item.symbol === symbol;
            return item;
          }),
          cryptocurrency: {name: res.data[0].name, symbol: symbol, prices: res.data},
          isLoading: false,
          graphData: [{
            id: res.data[0].name,
            color: 'hsl(1, 70%, 50%)',
            data: res.data.map(price => {
              return {x: price.date, y: price.price}
            })
          }]
        });
      })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Navbar navbarItems={this.state.navbarItems} onSelectMenuItem={this.onSelectMenuItem} />
        </nav>
        <div className="details-section">
          <div className={`main-section ${this.state.isLoading ? 'is-loading' : ''}`}>
            <Cryptocurrency cryptocurrency={this.state.cryptocurrency} graphData={this.state.graphData}/>
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
