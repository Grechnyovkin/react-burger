import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const order_url = 'https://norma.nomoreparties.space/api/orders';

export const addNewOrder = createAsyncThunk(
  'order/addNewOrder',
  async (initialOrder) => {
    try {
      const response = await axios.post(order_url, initialOrder);
      console.log(response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    ingredients: [],
    totalPrice: 0,
  },
  reducers: {
    addIngredientOrder(state, action) {
      state.orderId = action.payload.orderId;
      state.ingredients = action.payload.ingredients;
      state.totalPrice = action.payload.totalPrice;
    },
    resetIngredientOrder(state, action) {
      state.orderId = '';
      state.ingredients = [];
      state.totalPrice = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(addNewOrder.fulfilled, (state, action) => {
      const ingredients = state.ingredients;
    });
  },
});

export const { addIngredientOrder, resetIngredientOrder } = orderSlice.actions;

export default orderSlice.reducer;
