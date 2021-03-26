import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ParticipantForm = () => {


  const participantRegister = (e) => {
    e.preventDefault()

    alert('클릭 1')

    axios.post(`http://localhost:8080/participants`, {
      name: "11",
      gender: "22",
      birthday: "33",
      phoneNumber: "55",
      email: "77",
      regdate: Date()
    })
    .then(res => {
      alert(`res : ${res.data}`)
    })
    .catch(err => {
      alert(`err : ${err}`)
    })
  }

  return (
    <form onSubmit={participantRegister}>
      <h3>캠페인 참가자 등록</h3>
      
      <div className="content">
        <label for="participantName">이름</label>
        <input type="text" placeholder="이름을 입력하세요." name="name" value="" required />
        
        <label for="gender">성별</label>
        <select name="gender" required>
          <option value="man">남자</option>
          <option value="woman">여자</option>
        </select>

        <label for="birthday">생년월일</label>
        <input type="text" placeholder="생년월일을 입력하세요." name="birthday" required />
        {/* <input type="text" placeholder="년(4자리)" name="year" required />
        <input type="text" placeholder="월" name="month" required />
        <input type="text" placeholder="일" name="day" required /> */}

        <label for="phone">휴대전화</label>
        <input type="text" placeholder="전화번호 입력" name="phone" required />
        
        <label for="email">이메일 (선택)</label>
        <input type="text" placeholder="선택 입력" name="email" />
      </div>

      <div>
        <Link to="/Participant">취소</Link>
        <button type="submit">등록</button>
      </div>
    </form>
  )
}

export default ParticipantForm