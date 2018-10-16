import React, { Component } from 'react';

export class AddVineyardForm extends Component {
  constructor() {
    super();
    this.state = {
      vineyard_name: '',
      location: '',
      date_established: '',
      harvest: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.submitVineyardForm(this.state);
    this.setState({
      name: '',
      location: '',
      date_established: '',
      harvest: true
    });
  };

  submitVineyardForm = async vineyardObject => {
    const url = 'http://localhost:3010/api/v1/vineyards';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(vineyardObject),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  };
  render() {
    return (
      <div>
        <h1>Add New Vineyard Bitch</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="vineyard_name"
            id="vineyard_name"
            placeholder="Enter Vineyard Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter Vineyard Location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="date_established"
            id="date_established"
            placeholder="Enter Date Established"
            value={this.state.date_established}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="harvest"
            id="harvest"
            placeholder="Enter Harvest True or False"
            value={this.state.harvest}
            onChange={this.handleChange}
          />
          <button>Submit Vineyard</button>
        </form>
      </div>
    );
  }
}
