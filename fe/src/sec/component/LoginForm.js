import axios from 'axios'
import { get } from 'jquery'
import React, { useState } from 'react'

const LoginForm = () => {
  const [inputs, setInputs] = useState({})
  const [list, setList] = useState({})

  const { username, password } = inputs

  const userLogin = () => {
    axios({
      method: "get",
      url: 'http://localhost:8080/users/list',
      data: {
        username,
        password
      }
    })
      .then(res => {
        console.log(`res: ${JSON.stringify(res)}`)
        setList(res.data)
        
        list.map = () => {
          if (list.username === inputs.username) {
            if (list.password === inputs.password) {
              alert(`로그인 성공 !`)
            } else {
              alert(`비밀번호가 틀렸습니다.`)
            }
          } else {
            alert(`아이디가 틀렸습니다.`)
          }
        }
      })
      .catch(err => {
        console.log(`err: ${err}`)
      })
  }

  const inputChange = e => {
    const { name, value } = e.target
    console.log(inputs)

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  return (
    <form className="login_form" onSubmit={userLogin}>
      <div className="container">
        <div className="content">
          <label htmlFor="username"><b>아이디</b></label>
          <input type="text" id="username" name="username" placeholder="아이디를 입력하세요" onChange={inputChange} required />

          <label htmlFor="password"><b>비밀번호</b></label>
          <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" onChange={inputChange} required />
        </div>

        <div className="btn_area">
          <button type="submit" className="signupbtn"><b>로그인</b></button>
          <button type="button" className="cancelbtn"><b>돌아가기</b></button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm