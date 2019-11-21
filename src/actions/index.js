export const SELECT_USER = 'SELECT_USER';
export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

// Test on Postman to fetch api: 
// https://www.dataneb.com/post/how-to-make-calls-to-twitter-apis-using-postman-client

const MY_CONSUMER_KEY = 'QYOgHZjV4IrNGSA6nTQO6DVHq';
const MY_CONSUMER_SECRET = '5OpOALje8EYvRfxXaTOL1k204ip42WN7GKkmVFw2jG51bApVQC';
const MY_CONSUMER_TOKEN_KEY = '1195252928090521600-UCE9hzSTfmhFYtGlcns7ddxWRCsR5t';
const MY_CONSUMER_TOKEN_SECRET = 'MINA4QGBEjtGKTo0IaY5pRDSLko4cGCzMugkir2QJy1Jb';


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
