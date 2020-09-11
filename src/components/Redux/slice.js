import { createSlice } from '@reduxjs/toolkit';
import randomObject from '../../util/randomObject';

const initialState = {
  count: 0,
  nestedObject: { changes: 0, value: randomObject() },
};

export const appSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    increaseByOne: (state) => {
      state.count = state.count + 1;
    },
    updateNestedObject: (state, action) => {
      state.nestedObject.value = action.payload;
      state.nestedObject.changes = state.nestedObject.changes + 1;
    },
  },
});

export const { increaseByOne, updateNestedObject } = appSlice.actions;

export const selectCount = (state) => state.slice.count;
export const selectNestedObject = (state) => state.slice.nestedObject;

export default appSlice.reducer;
