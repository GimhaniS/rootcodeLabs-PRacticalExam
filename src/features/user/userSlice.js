import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = '- https://stage-api.serw.io/v1/auth/local/login';

const initialState = {
  isLoading: true,
  userId: ' ',
  token: '',
};

export const userLogIn = createAsyncThunk('user/logIn', async ({ email, password }) => {
  try {
    const resp = await axios.post(`${url}`, { email, password });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userLogIn.pending]: (state) => {
      state.isLoading = true;
    },
    [userLogIn.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.tracksList = action.payload;
    },
    [userLogIn.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});
export default userSlice.reducer;
