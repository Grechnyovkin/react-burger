import { createSlice } from '@reduxjs/toolkit';

const url = 'https://norma.nomoreparties.space/api/ingredients';

const initialState = {
  ingredients: [],
  isLoading: false,
  status: null,
  error: null,
};

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    inghredientsFetching(state) {
      state.isLoading = true;
    },
    inghredientsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.ingredients = action.payload;
      state.ingredients.map((item) => (item.qty = 0));
      const toggledQty = state.ingredients.find(
        (ingredient) => ingredient._id === '60d3b41abdacab0026a733c6'
      );
      toggledQty.qty = 2;
    },
    inghredientsFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    upQty(state, action) {
      const toggledQty = state.ingredients.find(
        (ingredient) => ingredient._id === action.payload.id
      );
      toggledQty.qty += 1;
    },
    downQty(state, action) {
      console.log(action.payload.id);
      const toggledQty = state.ingredients.find(
        (ingredient) => ingredient._id === action.payload.id
      );
      toggledQty.qty -= 1;
    },
    bunQty(state, action) {
      const toggledQty = state.ingredients.find(
        (ingredient) => ingredient._id === action.payload.id
      );
      toggledQty.qty = 0;
      toggledQty.qty += 2;
    },
    resetQty(state) {
      const toggledQty = state.ingredients.filter(
        (ingredient) => ingredient.type === 'bun'
      );
      toggledQty.map((item) => (item.qty = 0));
    },
  },
});

export const {
  inghredientsFetching,
  inghredientsFetchingSuccess,
  inghredientsFetchingError,
  upQty,
  downQty,
  bunQty,
  resetQty,
} = ingredientSlice.actions;

export default ingredientSlice.reducer;
