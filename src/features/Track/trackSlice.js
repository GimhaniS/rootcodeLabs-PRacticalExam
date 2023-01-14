import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://itunes.apple.com/search?term=all';

const initialState = {
  isLoading: true,
  tracksList: [],
  searchTracksLists: [],
};

export const getTrackList = createAsyncThunk('song/getSongList', async (name, thunkAPI) => {
  try {
    console.log(name);
    console.log(thunkAPI);
    const resp = await axios(url);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  extraReducers: {
    [getTrackList.pending]: (state) => {
      state.isLoading = true;
    },
    [getTrackList.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.tracksList = action.payload;
    },
    [getTrackList.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});
export default trackSlice.reducer;
