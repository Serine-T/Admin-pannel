import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_LINK } from '../../helpers/API';
import axios from 'axios';

export const gettingUsersInfo = createAsyncThunk(
  'users/gettingUsersInfo',
  async (_, thunkAPI) => {
    const usersData = thunkAPI.getState();
    const { page, limit } = usersData.users;
    try {
      const resp = await axios(`${API_LINK}/users${page ? `?_page=${page}` : ''}${limit ? `&_limit=${limit}` : ''}`);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(`${API_LINK}/users`);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const sortUsers = createAsyncThunk(
  'users/sortUsers',
  async ({ field, order }, thunkAPI) => {
    try {
      const resp = await axios(`${API_LINK}/users?_sort=${field}&_order=${order}`);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, thunkAPI, ) => {
    try {
      await axios.delete(`${API_LINK}/users/${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (body, thunkAPI, ) => {
    try {
      await axios.post(`${API_LINK}/users`, body);
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getSingleUser = createAsyncThunk(
  'users/getSingleUser ',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.patch(`${API_LINK}/users/${id}`);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const editUser = createAsyncThunk(
  'users/editUser',
  async ({ id, body }, thunkAPI, ) => {
    try {
      await axios.put(`${API_LINK}/users/${id}`, body);
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

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
