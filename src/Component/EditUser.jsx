import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Redux/UserReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditUser() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existinguser = users.filter((f) => f.id == id);
  const { username, email, role } = existinguser[0];
  const [userName, setUserName] = React.useState(username);
  const [emailuser, setEmailUser] = React.useState(email);
  const [roleuser, setRoleUser] = React.useState(role);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        username: userName,
        email: emailuser,
        role: roleuser,
      })
    );
    navigate("/");
    toast.success(" user updated successfully ");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="'w-100 border bg-secondary text-white p-5">
        <h3> Edit User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={emailuser}
              onChange={(e) => setEmailUser(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="Enter Role"
              value={roleuser}
              onChange={(e) => setRoleUser(e.target.value)}
            ></input>
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
