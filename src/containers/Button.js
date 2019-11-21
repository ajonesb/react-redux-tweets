import React from 'react'
import { connect } from 'react-redux'
import { fetchTweets } from '../actions'

let Button = ({ getTweets, user }) => (
  <button
    onClick={() => { getTweets(user) }}
    className="btn btn-primary btn-lg btn-block" >
    Get Top Tweets
  </button>
);

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  getTweets: fetchTweets
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
