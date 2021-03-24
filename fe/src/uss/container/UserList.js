import '../component/UserList.css';

const UserList = () =>
(
  <>
    <h2>User List</h2>

    <table>

      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Name1</td>
        <td>Email1</td>
        <td>Phone1</td>
        <td>Address1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Name2</td>
        <td>Email2</td>
        <td>Phone2</td>
        <td>Address2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Name3</td>
        <td>Email3</td>
        <td>Phone3</td>
        <td>Address3</td>
      </tr>
    </table>
  </>
)

export default UserList