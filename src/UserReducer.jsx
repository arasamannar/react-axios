// UserReducer.js

import { createSlice } from '@reduxjs/toolkit';

const generateNextUserId = () => {
  let storedId = localStorage.getItem('nextUserId');
  let nextId = storedId ? parseInt(storedId, 10) + 1 : 11;
  localStorage.setItem('nextUserId', nextId.toString());
  return nextId;
};

export const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload.map(user => ({ ...user }));
    },
    addUser: (state, action) => {
      const newUser = {
        id: generateNextUserId(),
        ...action.payload,
      };
      return [...state, newUser];
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { setUsers, addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
