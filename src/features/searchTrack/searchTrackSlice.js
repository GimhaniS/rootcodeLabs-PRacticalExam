import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  searchTracksList: [],
};

export const getSearchTrackList = createAsyncThunk(
  'song/getSearchTrackList',
  async (name, thunkAPI) => {
    try {
      const response = await fetch('https://itunes.apple.com/search?term=jack+johnson.', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      let data = await response.json();
      // console.log('response', data);
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const searchTrackSlice = createSlice({
  name: 'searchTrack',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchTrackList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchTrackList.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.searchTracksList = action.payload.results;
      })
      .addCase(getSearchTrackList.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});
export default searchTrackSlice.reducer;
