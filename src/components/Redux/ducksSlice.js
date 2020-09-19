import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sunk: 0,
};

for (let i = 0; i < 2000; i++) {
  initialState[i] = { visible: true };
}

export const ducksSlice = createSlice({
  name: 'pixels',
  initialState,
  reducers: {
    toggle: (state, action) => {
      state[action.payload] = { visible: !state[action.payload].visible };
      state.sunk += state[action.payload].visible ? -1 : 1;
    },
  },
});

export const { toggle } = ducksSlice.actions;

export const selectSunk = (state) => state.pixels.sunk;

export default ducksSlice.reducer;
