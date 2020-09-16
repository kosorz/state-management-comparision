import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summary: 0,
};

for (let i = 0; i < 5000; i++) {
  initialState[i] = { visible: true };
}

export const pixelsSlice = createSlice({
  name: 'pixels',
  initialState,
  reducers: {
    toggle: (state, action) => {
      state[action.payload] = { visible: !state[action.payload].visible };
      state.summary += state[action.payload].visible ? -1 : 1;
    },
  },
});

export const { toggle } = pixelsSlice.actions;

export const selectSummary = (state) => state.pixels.summary;

export default pixelsSlice.reducer;
