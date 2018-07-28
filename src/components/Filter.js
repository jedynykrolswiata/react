import React from 'react';
import UsersList from './UsersList';

const allUsers = ['mchlebda','jmotulewicz','_test','RepositorySystemUser','kszelag','tpartyka','wpawlowicz','@ReportRepositorySystem','CA_kkijewski','bc_test_config','knalepka','CA_pgedek','[internal system user]','bc_test_observer','pfranczak','@RepositorySystem','rsimporter','@DynamicSQLSystem','ossadmin','skus','CA_lbojdys','dnowak','szymon_ms','bcymerman','rsekula','mmatyasik','dlyszczek','kwikar','kbudziak','knowak','ltobera','tblachut','jpawlowski','CA_mszkotnicki','mbaginski','tchuminski','awojciechowski'];

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers,
      selectedUser: null
    };
  }

  render() {
    return (
      <div>
        [{this.state.selectedUser}] <br />
        <input onInput={this.filterUsers} />
        <UsersList userSelected={this.onUserSelected} users={this.state.filteredUsers} />
      </div>
    );
  }

  onUserSelected = (selectedUser) => {
    this.setState({
      selectedUser
    });
  }

  filterUsers = (e) => {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    });
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }
};

export default Filter;
