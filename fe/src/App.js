import React from 'react'
import Counter from './cmm/container/Counter'
import Login from './sec/container/Login'
import SignUp from './uss/container/SignUp'
import Home from './cmm/container/Home'
import { Route } from 'react-router-dom'
import ParticipantRegister from './pts/container/ParticipantRegisterPage'
import ParticipantList from './pts/container/ParticipantListPage'

const App = () => {

  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/Counter" component={Counter} />
      <Route path="/Login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/participants/register" component={ParticipantRegister} />
      <Route path="/participants/list" component={ParticipantList} />
    </>
  )
}

export default App
