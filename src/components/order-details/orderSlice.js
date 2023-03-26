import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderId: '',
    ingredients: [],
    discount: 0,
    totalPrice: 0,
  },
  reducers: {
    addIngredientOrder(state, action) {
      state.orderId = action.payload.orderId;
      state.ingredients = action.payload.ingredients;
      state.discount = action.payload.discount;
      state.totalPrice = action.payload.totalPrice;
    },
    resetIngredientOrder(state, action) {
      state.orderId = '';
      state.ingredients = [];
      state.discount = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: {},
});

export const { addIngredientOrder, resetIngredientOrder } = orderSlice.actions;

export default orderSlice.reducer;
