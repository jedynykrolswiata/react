import React from 'react';
import { connect } from "react-redux";
import { changeSeedAndFetch } from "../actions";

class SeedPicker extends React.Component {
  render() {
    return (
      <div className="field">
        <select
          className="ui dropdown fluid"
          onChange={this.handleSeedChange}
          value={this.props.seed}
        >
          <option value="default-seed">Moje kontakty</option>
          <option value="one-seed">Inne kontakty</option>
          <option value="another-seed">Jeszcze inne kontakty</option>
        </select>
      </div>
    );
  }

  handleSeedChange = e => {
    this.props.changeSeedAndFetch(e.currentTarget.value);
  };
}

const mapStateToProps = (state) => {
  return {
    seed: state.seed
  };
};
const mapDispatchToProps = { changeSeedAndFetch };

export const SeedPickerContainer = connect(mapStateToProps, mapDispatchToProps)(
  SeedPicker
);