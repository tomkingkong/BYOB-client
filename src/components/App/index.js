import React, { Component } from 'react';

import './App.css';
import { Landing } from '../Landing';
import { Wines } from '../Wines';
import { Vineyards } from '../Vineyards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Vineyards />
        <Wines />
      </div>
    );
  }
}

export default App;
