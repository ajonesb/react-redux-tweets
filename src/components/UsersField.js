import React from 'react'
import User from '../containers/User'

const UsersField = () => (

  <div className="row users-row" >
    <User userName="Batman" userString="batman" />
    <User userName="superman" userString="superman" />
    <User userName="marvel" userString="marvel" />
    <User userName="cnn" userString="cnn" />
    <User userName="spiderman" userString="spiderman" />
    <User userName="joker" userString="joker" />
  </div>
);

export default UsersField;

