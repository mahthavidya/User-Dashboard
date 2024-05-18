import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateUser from "./Component/CreateUser";
import EditUser from "./Component/EditUser";
import DetailsPage from "./Component/DetailsPage";
import { userList } from "./mockData/Data";
import { importUser } from "./Redux/UserReducer";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [allUser, setAllUser] = useState(null);
  const [loading, isLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // mocking API Call;
    setTimeout(() => {
      setAllUser(userList);
    }, 3000);
  }, []);

  useEffect(() => {
    if (allUser) {
      dispatch(importUser(allUser));
      setAllUser(null);
      isLoading(false);
    }
  }, [allUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loading={loading} />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
          <Route path="/detailspage/:id" element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
