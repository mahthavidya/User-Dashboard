import React from "react";
import { addUser } from "../Redux/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateUser() {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        username: userName,
        email: email,
        role: role,
      })
    );
    navigate("/");
    toast.success(" user added successfully ");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="'w-100 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter UserName"
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
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="Enter Role"
              onChange={(e) => setRole(e.target.value)}
            ></input>
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
