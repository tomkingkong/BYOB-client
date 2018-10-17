import React, { Component } from 'react';

import './App.css';
import { Landing } from '../Landing';
import { VineyardsContainer } from '../VineyardsContainer';
import { AddVineyardForm } from '../AddVineyardForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <AddVineyardForm />
        <VineyardsContainer />
      </div>
    );
  }
}

export default App;
