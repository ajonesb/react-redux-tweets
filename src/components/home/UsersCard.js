import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UsersCard extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={users.profile_image_url} alt="Profile Image" />
          <h5 className="text-light card-title">
            {users.screen_name} - {users.description}
          </h5>
          <Link className="btn btn-primary" to={'/users/' + users.url}>
             User Link
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default UsersCard;
