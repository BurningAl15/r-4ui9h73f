import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repeater: ""
    }
  }

  repeating = (e) => {
    this.setState({
      repeater: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeating} />
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;
