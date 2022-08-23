import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, getAllUsers, getSingleUser, sortUsers } from '../actions/usersActions';
import { gettingUsersInfo } from './../actions/usersActions';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    totalUsers: 0,
    limit: 10,
    page: 1,
    usersList: [],
    usersStatus: '',
    currentUserData: { name: '', email: '', location: '' }
  },
  reducers: {
    setStatus(state, { payload }) {
      state.usersStatus = payload;
    },
    setPage(state, { payload }) {
      state.page = payload;
    },
    setLimit(state, { payload }){
      state.limit = payload;
    },
    removeUser(state, { payload }){
      state.usersList = state.usersList.filter(user => user.id !== payload);
    },
  },
  extraReducers: {
    [getAllUsers.fulfilled]: (state, { payload })=> {
      state.totalUsers = payload.length;
    },
    [gettingUsersInfo.pending]: (state) => {
      state.usersStatus = 'pending';
    },
    [gettingUsersInfo.fulfilled]: (state, { payload }) => {
      state.usersStatus = 'success';
      state.usersList = payload;
    },
    [gettingUsersInfo.rejected]: (state) => state.usersStatus = 'error',
    [deleteUser.fulfilled]: (state) => state.usersStatus = 'deleted',
    [sortUsers.fulfilled]: (state, { payload }) => {
      state.usersStatus = 'success';
      state.usersList = payload;
    },
    [getSingleUser.fulfilled]: (state, { payload })=> {
      state.currentUserData = payload;
    },
  }
});

export const { setPage, setLimit, setStatus, removeUser, } = usersSlice.actions;
export default usersSlice;
