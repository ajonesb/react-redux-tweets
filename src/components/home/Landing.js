import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import UsersContainer from './UsersContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <UsersContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.users.loading
});

export default connect(mapStateToProps)(Landing);
