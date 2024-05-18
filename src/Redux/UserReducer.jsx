import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

import { userList } from "../mockData/Data";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    importUser: (state, action) => {
      state.push(...action.payload);
    },
    updateUser: (state, action) => {
      const { id, username, email, role } = action.payload;
      const updateUser = state.find((user) => user.id == id);
      if (updateUser) {
        updateUser.username = username;
        updateUser.email = email;
        updateUser.role = role;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deleteUser = state.find((user) => user.id == id);
      if (deleteUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, importUser, updateUser, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
