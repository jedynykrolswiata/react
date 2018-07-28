import React, { Component } from 'react';

class Forms extends Component {

  constructor(props) {
    super(props)
    this.state = { value: 'blue', isChecked: false, bgColor: 'rgb(220, 255, 108)' }
    this.backColor = this.props.backColor.bind(this)
  }

  getRandomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleChangeTick = (event) => {
    var color = this.getRandomColor()
    if (this.state.isChecked === false) {
      this.setState({ value: "to sie wypierniczyło", bgColor: color });
    }
    else {
      this.setState({ value: "no i masz ci babo placek", bgColor: color });
    }
    this.backColor(color)

    this.setState({ isChecked: !this.state.isChecked });
  }

  multiplier(val) {
    let longerPls = val;
    for (let i = 0; i < 50; i++) {
      longerPls += " " + val
    }
    return longerPls;
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.bgColor }}>
        Tu kliknij by wybrać kolor
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="red">Czerwony</option>
          <option value="blue">Niebieski</option>
          <option value="green">Zielony</option>
        </select>
        <br />
        <br />
        Tu value wskoczy niby skoczek
        <textarea value={this.multiplier(this.state.value)} onChange={this.handleChange} />
        <br />
        <br />
        Jak zaznaczysz ten tick to sie wszystko wypierniczy
        <br />
        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChangeTick} />
      </div>
    );
  }
}

export default Forms;
