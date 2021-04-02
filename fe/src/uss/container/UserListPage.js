import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserListForm from '../component/UserListForm';
import '../css/UserList.css';

const UserList = () => {
  const [list, setList] = useState([])
  
  const getList = () => {
    axios({
      method: "get",
      url: 'http://localhost:8080/users'
    })
      .then(res => {
        console.log(`res: ${JSON.stringify(res)}`)
        setList(res.data)
      })
      .catch(err => {
        console.log(`err: ${err}`)
      })
  }
  
  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <h1>User List</h1>

      <UserListForm list={list} />
    </>
  )
}

export default UserList