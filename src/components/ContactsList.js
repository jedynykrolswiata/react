import React, { Component } from 'react';
import ContactItem from './ContactItem';
import loading from '../giphy.gif';

class ContactsList extends Component {

  state = { showLoading: true }

  componentDidUpdate() {
    if (this.state.showLoading === true) {
      this.setState({ showLoading: false })
    }
  }

  contactToContactItem = contact => {
    const avatarUrl = contact.picture.thumbnail;
    const { title, first, last } = contact.name;
    const name = `${title} ${first} ${last}`.trim();
    const phone = contact.phone;
    const key = contact.login.username;
    return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} username={key} />;
  };

  render() {
    return (
      <div>
        <img className="loadButton" style={{ display: this.state.showLoading ? 'inline' : 'none' }} src={loading} width="50%" id="load" alt="Oto moj ryj" />

        <ul className="ui relaxed divided list selection">
          {this.props.contacts.map(this.contactToContactItem)}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
