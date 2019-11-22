import {
  SEARCH_USERS,
  FETCH_USERS,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  users: [],
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
