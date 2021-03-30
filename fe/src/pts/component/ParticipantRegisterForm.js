import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Participant.css'

const ParticipantForm = () => {

  const [inputs, setInputs] = useState({})

  const { name, gender, birthday, phoneNumber, email } = inputs

  const inputChange = e => {
    const { name, value } = e.target
    console.log(inputs)

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const participantRegister = (e) => {
    e.preventDefault()

    alert('등록 !')

    axios.post(`http://localhost:8080/participants`, {
      name,
      gender,
      birthday,
      phoneNumber,
      email,
      regdate: new Date()
    })
      .then(res => {
        console.log(`res : ${JSON.stringify(res.data)}`)
        window.location = `/participants/list`
      })
      .catch(err => {
        console.log(`err : ${err}`)
      })
  }

  return (
    <form onSubmit={participantRegister} style={{ margin: "0 auto" }}>
      <div className="content">
        <label for="name">이름</label>
        <input type="text" id="name" name="name" onChange={inputChange} placeholder="이름을 입력하세요." required />
        
        <label for="gender">성별</label>
        <select id="gender" name="gender" onChange={inputChange} required>
          <option value="">성별</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>

        <label for="birthday">생년월일</label>
        <input type="text" id="birthday" name="birthday" onChange={inputChange} placeholder="생년월일을 입력하세요." required />
        {/* <input type="text" placeholder="년(4자리)" name="year" required />
        <input type="text" placeholder="월" name="month" required />
        <input type="text" placeholder="일" name="day" required /> */}

        <label for="phoneNumber">휴대전화</label>
        <input type="text" id="phoneNumber" name="phoneNumber" onChange={inputChange} placeholder="전화번호 입력" required />
        
        <label for="email">이메일 (선택)</label>
        <input type="text" id="email" name="email" onChange={inputChange} placeholder="선택 입력" />
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

export default ParticipantForm