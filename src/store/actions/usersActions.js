import { API_LINK } from '../../helpers/API';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
