import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import  TweetsItem  from '../components/TweetsItem';

let TopTweets = ({ users, loading }) => {
    let topTweets = "";

    if (users) {
        topTweets = users.map((users, index) =>
            (
                <div className="col-sm-12 col-md-6 col-lg-4" key={`${index}`}>
                    <TweetsItem users={users[index]} />
                </div>             
            )
        )
    }
    
    if (loading) {
        topTweets = <h3 className="loading-indicator">Loading ...</h3>
    }

    return (
        <div className="topTweets container">
            <div className="row">
                {topTweets}
            </div>     
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.json,
    loading: state.loading
})

TopTweets = connect(
    mapStateToProps,
    null
)(TopTweets)

export default TopTweets;

