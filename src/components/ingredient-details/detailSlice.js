import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    ingredient: {},
  },
  reducers: {
    detail(state, action) {
      state.ingredient = action.payload.card;
    },
    resetDetail(state, action) {
      state.ingredient = {};
    },
  },
  extraReducers: {},
});

export const { detail, resetDetail } = detailSlice.actions;

export default detailSlice.reducer;
