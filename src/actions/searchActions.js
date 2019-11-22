import { SEARCH_USERS, FETCH_USERS, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIKey';

export const searchUsers = text => dispatch => {
  dispatch({
    type: SEARCH_USERS,
    payload: text
  });
};

export const fetchUsers = text => dispatch => {
  axios
    .get(` https://api.twitter.com/1.1/users/search.json?q=apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_USERS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};


export const setLoading = () => {
  return {
    type: LOADING
  };
};
