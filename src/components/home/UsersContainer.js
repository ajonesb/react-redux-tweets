import React, { Component } from 'react';

import { connect } from 'react-redux';

import UsersCard from './UsersCard';

export class UsersContainer extends Component {
  render() {
    const { users } = this.props;
    let content = '';

    content =
      users.Response === 'True'
        ? users.Search.map((users, index) => (
            <UsersCard key={index} users={users} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(UsersContainer);
