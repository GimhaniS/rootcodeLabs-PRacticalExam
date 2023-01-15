import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  isLoading: true,
  tracksList: [],
  favTrackList: [],
};

export const getTrackList = createAsyncThunk('song/getSongList', async (name, thunkAPI) => {
  try {
    const response = await fetch('https://itunes.apple.com/search?term=all', {
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
});

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    addToFavTrackList: (state, action) => {
      const selectedTrack = action.payload;
      console.log('selectedTrack', selectedTrack);
      state.favTrackList.push({ selectedTrack });
      console.log(' state.favTrackList', state.favTrackList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrackList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrackList.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.tracksList = action.payload.results;
      })
      .addCase(getTrackList.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { addToFavTrackList } = trackSlice.actions;
export default trackSlice.reducer;
