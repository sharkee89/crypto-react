import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cryptocurrencies from './components/Cryptocurrencies';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cryptocurrencies: [
      { id: 1, name: 'Bitcoin', price: 8654 },
      { id: 2, name: 'Etherium', price: 1541 },
      { id: 3, name: 'Safex', price: 0.86 },
      { id: 4, name: 'Blue', price: 0.05 }
    ]
  }
  render() {
    console.log(this.state.cryptocurrencies);
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <div>
          <Cryptocurrencies cryptocurrencies={this.state.cryptocurrencies} />
        </div>
      </div>
    )
  }
}

export default App;
