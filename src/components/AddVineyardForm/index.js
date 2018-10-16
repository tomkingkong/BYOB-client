import React, { Component } from 'react';

export class AddVineyardForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      date_established: '',
      harvest: true
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="location"
          id="location"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <input
          type="date"
          name="date_established"
          id="date_established"
          value={this.state.date_established}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="harvest"
          id="harvest"
          value={this.state.harvest}
          onChange={this.handleChange}
        />
        <button>Submit Vineyard</button>
      </form>
    );
  }
}
