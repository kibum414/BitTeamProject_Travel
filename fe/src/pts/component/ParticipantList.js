import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/List.css'

const ParticipantList = () => {

  const [list, setList] = useState([])

  const getList = () => {
    axios.get(`http://localhost:8080/participants`)
      .then(res => {
        console.log(res)
        setList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    console.log('getList')

    getList()
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>신청일</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((participant) =>
              <tr>
                <td key={participant.participantNo}>{participant.participantNo}</td>
                <td>
                  <Link to={`/participants/detail/${participant.participantNo}`}>
                    {participant.name}
                  </Link>
                </td>
                  <td>{participant.regdate}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default ParticipantList