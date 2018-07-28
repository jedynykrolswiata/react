import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0, all: 0 };
  }

  render() {
    return (
      <div className="licznik">
        <button onClick={this.increment.bind(this)}>+</button>
        <output>{this.state.counter}</output>
        <button onClick={this.decrement.bind(this)}>-</button>
        <br />
        Wszystkich: <output>{this.state.all}</output>
      </div>
    );
  }

  increment() {
    this.setState(prevState => {
      return {
        counter: this.state.counter + 1,
        all: this.state.all + 1
      };
    }, () => {
      console.log("TUTAJ UZYSKUJE CALLBACK Z INCREMENTA: ", this.state.counter)
    });
  }

  decrement() {
    this.setState(prevState => {
      return {
        counter: this.state.counter - 1,
        all: this.state.all + 1
      };
    }, () => {
      console.log("TUTAJ UZYSKUJE CALLBACK Z DECREMENTA: ", this.state.counter)
    });
  }
}

export default Counter;
