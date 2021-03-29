import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ParticipantDetail = () => {
  const [detail, setDetail] = useState({})

  const getDetail = () => {
    axios.get(`http://localhost:8080/participants`)
      .then(res => {
        console.log(res)

        setDetail(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <table>
        <thead>

        </thead>
      </table>
    </>  
  )
}

export default ParticipantDetail