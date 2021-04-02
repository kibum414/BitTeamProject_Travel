import { Link } from "react-router-dom"

const UserListForm = ({ list }) => {
  
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>아이디</th>
            <th>이름</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(user =>
              <tr key={user.userNo}>
                <td>{user.userNo}</td>
                <td>
                  <Link to={`/users/detail/${user.userNo}`}>
                    {user.username}
                  </Link>
                </td>
                <td>{user.name}</td>
                <td>{user.regdate}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default UserListForm