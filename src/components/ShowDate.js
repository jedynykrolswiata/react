import React, { Component } from 'react';
import DateComponent from './DateComponent';

class ShowDate extends Component {
  constructor(props) {
    super(props);

    this.state = { dateVisible: true };
  }

  onButtonClick() {
    this.setState(state => ({ dateVisible: !state.dateVisible }));
  }

  render() {
    return (
      <div className="licznik">
        <button onClick={this.onButtonClick.bind(this)}>Kliknij</button> <br />
        {this.state.dateVisible && <DateComponent />}
      </div>
    );
  }
}

export default ShowDate;
