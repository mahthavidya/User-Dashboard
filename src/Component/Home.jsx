import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { TablePagination } from "@mui/base";
import { deleteUser } from "../Redux/UserReducer";
import loader from "../images/200w.gif";
import { useNavigate } from "react-router-dom";

export default function Home({ loading }) {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
    alert("U want to delete the user from userlist table");
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <h2> UserListing</h2>
        {/* <div className="card-header">
          {/* <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link> */}
        <Link to="/create" className="btn btn-success my-3">
          Create User
        </Link>
        <br />
        {loading ? (
          <img src={loader} />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>UserName</td>
                <td>Email</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  {/* <Link to={`/edit/${user.id}`}> */}
                  <td>{user.id}</td>
                  <td
                    onClick={() => {
                      navigate(`/detailspage/${user.id}`);
                    }}
                  >
                    {user.username}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  {/* </Link> */}
                  <td>
                    <Link
                      to={`/edit/${user.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <Pagination />
      </div>
    </div>
  );
}
