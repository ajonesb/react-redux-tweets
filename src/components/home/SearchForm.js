import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchUsers,
  fetchUsers,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {

  onChange = e => {
    this.props.searchUsers(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchUsers(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="search-form-wrap text-center">
        <div className="container">
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Twitter Users"
              onChange={this.onChange}
            />
            <button type="submit" className="search-button btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.users.text
});

export default connect(
  mapStateToProps,
  { searchUsers, fetchUsers, setLoading }
)(SearchForm);
