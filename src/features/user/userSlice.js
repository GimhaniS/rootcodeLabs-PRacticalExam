import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoading: true,
  userId: ' ',
  token: '',
};

export const userLogIn = createAsyncThunk('user/logIn', async ({ email, password }, thunkAPI) => {
  try {
    const response = await fetch('https://stage-api.serw.io/v1/auth/local/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let data = await response.json();
    console.log('response', data);
    console.log('respons data.customerAccessToken', data.customerAccessToken);
    console.log('respons data.userId', data.userId);
    console.log('respons response.status ', response.status);
    if (response.status === 200 || response.status === 201) {
      AsyncStorage.setItem('token', data.customerAccessToken);
      console.log('initialState', initialState);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log('Error', e);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const signOut = createAsyncThunk(async () => {
  AsyncStorage.setItem('token', ' ');
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      console.log('jghjcmutrh', state.token);
      state.token = null;
      AsyncStorage.setItem('token', null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        console.log('111');
        state.isLoading = false;
        state.userId = action.payload.userId;
        state.token = action.payload.customerAccessToken;
        console.log('state.userId', action.payload.userId);
      })
      .addCase(userLogIn.rejected, (state, action) => {
        console.log('999', action);
        state.isLoading = false;
      })
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        console.log('111');
        state.isLoading = false;
        state.userId = null;
        state.token = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        console.log('999', action);
        state.isLoading = false;
      });
  },
});
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
