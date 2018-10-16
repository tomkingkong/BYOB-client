import React, { Component } from 'react';

import './App.css';
import { Landing } from '../Landing';
import { WinesContainer } from '../WinesContainer';
import { VineyardsContainer } from '../VineyardsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <VineyardsContainer />
        <WinesContainer />
      </div>
    );
  }
}

export default App;
