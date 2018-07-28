import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    const { avatarUrl, name, phone, username } = this.props

    return (
      <li className="item">
        <img src={avatarUrl} className="ui mini rounded image" alt="" />
        <div className="content">
          <h4 className="header">{name} || {username}</h4>
          <div className="description">{phone}</div>
        </div>
      </li>
    );
  }
}

export default ContactItem;
