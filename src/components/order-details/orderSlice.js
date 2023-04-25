import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../constants/urls';

const order_url = `${BASE_URL}/orders`;

export const addNewOrder = createAsyncThunk(
  'order/addNewOrder',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const ingredients = getState().order.ingredients;
    try {
      const response = await fetch(order_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          ingredients: ingredients,
        }),
      });
      if (!response.ok) {
        throw new Error("Can't add order - Server error");
      } else {
        const data = await response.json();
        return data;
      }
    } catch (err) {
      dispatch(resetIngredientOrder());
      return rejectWithValue(err.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    ingredients: [],
    totalPrice: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    addIngredientOrder(state, action) {
      state.ingredients = action.payload.ingredients;
      state.totalPrice = action.payload.totalPrice;
    },
    resetIngredientOrder(state, action) {
      state.order = null;
      state.ingredients = [];
      state.totalPrice = 0;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addNewOrder.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addNewOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload) {
          state.order = action.payload;
        }
      })
      .addCase(addNewOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectOrder = (state) => state.order.order;

export const { addIngredientOrder, resetIngredientOrder } = orderSlice.actions;

export default orderSlice.reducer;
