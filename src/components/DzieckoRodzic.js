import React, { Component } from 'react';

class Rodzic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null
    }
  }

  render() {
    return (
      <div id="dolnePole">
        <div id="rodzic">
          <label>
            Jam jest rodzic dziecka <br />
            Wpisz tu liczbe to zobaczysz coś fajnego <br />
          </label>
          <input type="number" id="superInput" />
          <button onClick={this.handleClick}>Wyślij dziecku</button>
        </div>
        <Dziecko value={this.state.input} />
      </div>
    );
  }

  handleClick = (e) => {
    this.setState({ input: document.getElementById('superInput').value });
  }
}

class Dziecko extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromParent: Number(props.value),
      current: Number(props.value)
    }
  }

  render() {
    return (
      <div id="dziecko">
        <div>
          <label>
            Jam jest rodzic dziecka <br />
            Wpisz tu liczbe to zobaczysz coś fajnego<br />
          </label>
          <button onClick={this.increment}>+</button>
          <output>{this.state.current}</output>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.fromParent) {
      this.setState({
        fromParent: Number(nextProps.value),
        current: Number(nextProps.value),
      })
    }
  }

  increment = (e) => {
    this.setState({ current: this.state.current + 1 });
  }

  decrement= (e) => {
    this.setState({ current: this.state.current - 1 });
  }
}

export default Rodzic;