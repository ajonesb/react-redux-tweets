import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Users extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, users } = this.props;

    let usersInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={users.profile_image_url} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{users.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Screen Name:</strong> {users.screen_name}
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> {users.location}
              </li>
              <li className="list-group-item">
                <strong>Description:</strong> {users.description}
              </li>
              <li className="list-group-item">
                <strong>URL:</strong> {users.url}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>Screen Name </h3>
              {users.screen_name}
              <p>{users.location}</p>
              <p>{users.description}</p>
              <hr />
              
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : usersInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.users.loading,
  users: state.users.users
});

export default connect(
  mapStateToProps,
  { fetchUsers, setLoading }
)(Users);
