import React from 'react'
import { Link } from 'react-router-dom'
import '../css/List.css'

const ParticipantList = ({ list, indexOfFirstPost }) => {

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="postNum">번호</th>
            <th>이름</th>
            <th>신청일</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((participant) =>
              <tr key={participant.participantNo}>
                <td className="postNum">{++indexOfFirstPost}</td>
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