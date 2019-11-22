export const SELECT_USER = 'SELECT_USER';
export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

// Test on Postman to fetch api: 
// https://www.dataneb.com/post/how-to-make-calls-to-twitter-apis-using-postman-client

// Add API Keys created on Twitter App - https://developer.twitter.com/en/apps
const MY_CONSUMER_KEY = '';
const MY_CONSUMER_SECRET = '';
const MY_CONSUMER_TOKEN_KEY = '';
const MY_CONSUMER_TOKEN_SECRET = '';


export const getUser = user => ({
  type: SELECT_USER,
  user,
});

export const requestTweets = () => ({
  type: REQUEST_TWEETS,
});

export const receivedTweets = json => ({
  type: RECEIVE_TWEETS,
  json: json.users,
});

export function fetchTweets(user) {
  return function (dispatch) {
    dispatch(requestTweets());
    return fetch(`h https://api.twitter.com/1.1/users/search.json?q=${user}&apiKey=${MY_CONSUMER_KEY}&consumerSecret=${MY_CONSUMER_SECRET}&consumertokenKey=${MY_CONSUMER_TOKEN_KEY}&consumerTokenSecret=${MY_CONSUMER_TOKEN_SECRET}`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedTweets(json));
      },
    );
  };
}
