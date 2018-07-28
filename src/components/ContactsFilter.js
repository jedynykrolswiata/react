import React from 'react';
import { connect } from "react-redux";
import { searchContacts } from "../actions";

export default class ContactsFilter extends React.Component {
    handleSearchChange = (e) => {
        this.props.searchContacts(e.currentTarget.value);
    };

    render() {
        return (
            <div className="ui icon fluid input">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.contactsSearch}
                    onChange={this.handleSearchChange}
                />
                <i className="search icon" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      contactsSearch: state.contactsSearch
    };
  };
  
  const mapDispatchToProps = { searchContacts };
  
  export const ContactsFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactsFilter);