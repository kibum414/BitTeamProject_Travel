import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div style={{ width: 150, margin: "0 auto" }}>
        <h1>Home</h1>
        <Link to={"Counter"}>Counter</Link><br />
        <Link to={"login"}>Login</Link><br />
        <Link to={"signup"}>SignUp</Link><br />
        <Link to={"participants/list"}>Participant</Link>

      </div>
    </>
  )
}

export default Home