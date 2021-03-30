import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ParticipantModify = (props) => {
  const [detail, setDetail] = useState({})
  
  const { name, gender, birthday, phoneNumber, email } = detail

  const getDetail = () => {
    axios.get(`http://localhost:8080/participants/${props.match.params.id}`)
      .then(res => {
        console.log(res)
        setDetail(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => getDetail(), [])

  const participantModify = (e) => {
    e.preventDefault()

    axios.put(`http://localhost:8080/participants/${props.match.params.id}`, {
      name,
      gender,
      birthday,
      phoneNumber,
      email
    })
      .then(res => {
        console.log(res)
      })
  }

  const inputChange = e => {
    const { name, value } = e.target
    
    setDetail({
      ...detail,
      [name]: value
    })
  }

  return (
    <form onSubmit={participantModify} style={{ margin: "0 auto" }}>
      <div className="content">
        <label for="name">이름</label>
        <input type="text" id="name" name="name" onChange={inputChange} value={detail.name} required />

        <label for="gender">성별</label>
        <select id="gender" name="gender" onChange={inputChange} required>
          <option value={detail.gender}>{detail.gender}</option>
          <option value="man">남자</option>
          <option value="woman">여자</option>
        </select>

        <label for="birthday">생년월일</label>
        <input type="text" id="birthday" name="birthday" onChange={inputChange} value={detail.birthday} required />
        {/* <input type="text" placeholder="년(4자리)" name="year" required />
        <input type="text" placeholder="월" name="month" required />
        <input type="text" placeholder="일" name="day" required /> */}

        <label for="phoneNumber">휴대전화</label>
        <input type="text" id="phoneNumber" name="phoneNumber" onChange={inputChange} value={detail.phoneNumber} required />

        <label for="email">이메일 (선택)</label>
        <input type="text" id="email" name="email" onChange={inputChange} value={detail.email} />
      </div>

      <div>
        <Link to="/participants/list">
          <button className="cancelbtn">취소</button>
        </Link>
        <button type="submit" className="participatebtn">등록</button>
      </div>
    </form>
  )
}

export default ParticipantModify