import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import logo from '../x.jpg';
import ContactsList from './ContactsList';
import Counter from './Counter';
import ShowDate from './ShowDate';
import Rodzic from './DzieckoRodzic';
import Filter from './Filter';
import Forms from './Forms';
import { connect } from "react-redux";
import { contactsFetched } from "../actions";
import { fetchContacts } from "../actions";
import { getFilteredContacts } from "../selectors/getFilteredContacts";
import { SeedPickerContainer } from './SeedPicker';

export default class MainApp extends Component {

  state = {
    nieWiemCoColor: 'rgb(168, 247, 43)'
  }

  componentDidMount() {
    this.props.fetchContacts();
  }

  ChangeParentStyle = (backgroundColor) => {
    this.setState({
      nieWiemCoColor: backgroundColor
    });
  }

  render() {
    return (
      <div className="MainApp">
        <div className="Title">Strona internetowa Przemysława Papciaka, 
        na której będzie najlepszy program świata.
        </div>
        <div id="contenair">
          <div id="photo">
            <img src={logo} width="100%" height="100%" id="mojRyj" alt="Oto moj ryj" />
          </div>
          <div id="panel">
            <AppHeader guzik2="Nos" />
            <ContactsList contacts={this.props.contacts} />
          </div>
          <div id="tekst">
            <ShowDate />
            Witam serdecznie!<br />
            Oto strona internetowa z przykładowym zastosowaniem reduxa. 
            A przynajmniej kiedyś tym właśnie się stanie. Na tę chwilę ta strona to śmieć. <br />
            <Counter />
          </div>
        </div>
        <div>
          <Rodzic />
        </div>
        <div id="panelDolny">
          <div id="filtry">
            Filtruj jak stary filtrownik
          <Filter />
          </div>
          <div id="nieWiemCo" style={{ backgroundColor: this.state.nieWiemCoColor }}>
            <Forms backColor={this.ChangeParentStyle} />
          </div>
          <div id="redux">
            <SeedPickerContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredContacts(state.contacts, state.contactsSearch)
  }
};
const mapDispatchToProps = { contactsFetched, fetchContacts };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(
  MainApp
);
