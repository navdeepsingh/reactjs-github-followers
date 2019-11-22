import React, { useState } from 'react'
import { Spin } from "antd"
import { width, height } from "./utils/Dimensions"
import HomeShowcase from './components/HomeShowcase'
import SearchForm from './components/SearchForm'
import ErrorMessage from './components/ErrorMessage'
import Follower from './components/Follower'
import GithubService from './services/Github'
import './App.css'

const App = () => {
  let [followers, setFollowers] = useState({})
  const [userName, setUserName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // for guthub user data fetching via github api
  const getFollowers = async () => {
    if (!userName) return false
    setLoading(true)
    setError("")
    try {
      followers = await GithubService.getFollowersOfUser(userName)
      setFollowers(followers)
      setLoading(false)
      console.log(followers)
    }
    catch (err) {
      setFollowers({})
      setError(err.message.split(":")[1])
    }
  }

  return (
    <div className="container">
      <HomeShowcase />
      <SearchForm
        handleChange={e => setUserName(e.target.value)}
        value={userName}
        searchHandler={getFollowers}
      />

      <div className="response__container row column">
        {!loading && followers.length > 0 ? (
          <Follower followers={followers} />
        ) : error ? (
          <ErrorMessage errMessage={error} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
