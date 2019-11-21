import { SELECT_USER, REQUEST_TWEETS, RECEIVE_TWEETS } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_USER:
      return { ...state, user: action.user };
    case REQUEST_TWEETS:
      return { ...state, loading: true };
    case RECEIVE_TWEETS:
      return { ...state, json: action.json, loading: false };
    default:
      return state;
  }
};

export default reducer;
