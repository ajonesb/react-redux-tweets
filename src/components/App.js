import React from 'react'
import UsersField from './UsersField'
import Button from '../containers/Button'
import TopTweets from '../containers/TopTweets'
import Header from '../components/Header'

const App = () => (
  <div>
    <Header/>
    <UsersField />
    <Button />
    <TopTweets />
  </div>
)

export default App;
