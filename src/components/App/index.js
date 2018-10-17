import React, { Component } from 'react';

import './App.css';
import { Landing } from '../Landing';
import { VineyardsContainer } from '../VineyardsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <VineyardsContainer />
      </div>
    );
  }
}

export default App;
