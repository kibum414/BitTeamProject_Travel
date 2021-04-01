import '../css/UserDetail.css';

const UserDetail = () =>
(
  <form style={{ border: "1px solid #ccc" }}>
    <div className="container">
      <h1>User Detail</h1>
      <hr />

      <label for="name"><b>Name</b></label>
      <input type="text" name="name" readOnly />

      <label for="email"><b>Email</b></label>
      <input type="text" name="email" readOnly />

      <label for="phone"><b>Phone Number</b></label>
      <input type="text" name="phone" readOnly />

      <label for="address"><b>Address</b></label>
      <input type="text" name="address" readOnly />

      <div className="clearfix">
        <button type="button" className="modifybtn">Modify</button>
        <button type="button" className="deletebtn">Delete</button>
        <button type="button" className="listbtn">List</button>
      </div>
    </div>
  </form>
)

export default UserDetail