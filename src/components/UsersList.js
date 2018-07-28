import React,{Component} from 'react';

class UsersList extends Component {
  constructor() {
    super()
    this.state = { lastClicked : null }
  }

  afterClick(user, userSelected) {
    return userSelected.bind(null, user)
  }

  render() {
    const { users, userSelected } = this.props

    if (users.length > 0) {
      return (
        <ul>
          {users.map(user => <li onClick={this.afterClick(user, userSelected)} key={user}>{user}</li>)}
        </ul>
      );
    }
  
    return (
      <p>No results!</p>
    );
  }
}

export default UsersList
