import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrease = () => { setCount(count + 1) }
  const onDecrease = () => { setCount(count - 1) }

  return (
    <>
      <h1>홈페이지</h1>
      <button>회원가입</button>
      <button>로그인</button><br />

      <h1>카운터 : {count}</h1>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </>
  )
}

export default Counter