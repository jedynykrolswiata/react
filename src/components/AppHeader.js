import React, { Component } from 'react';
import { ContactsFilterContainer } from "./ContactsFilter";
// import ContactsFilter from './ContactsFilter';

class AppHeader extends Component {

  click() {
    alert('Haha kliknąłeś w nos! Teraz se kliknij we własny');
  }

  render() {
    return (
      <header className="ui menu">
        <nav className="ui container">
          <a className="header item">
            <img className="logo" src="https://i.imgur.com/PIuZeN0.jpg" alt="Mam alt bo musze" />
          </a>
          <div className="header item">
           <ContactsFilterContainer/>
          </div>
          <div className="header item" onClick={this.click}>
            <button className="ui button">{this.props.guzik2}</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
