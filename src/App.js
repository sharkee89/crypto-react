import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cryptocurrency from './components/Cryptocurrency';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cryptocurrency: { id: 1, name: 'Bitcoin', price: 8654 }
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <div>
          <Cryptocurrency cryptocurrency={this.state.cryptocurrency} />
        </div>
      </div>
    )
  }
}

export default App;
