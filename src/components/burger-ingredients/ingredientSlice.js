import {
  createSlice,
  // nanoid,
  createAsyncThunk,
  createAction,
  current,
} from '@reduxjs/toolkit';
// import axios from 'axios';
// const ingredients_url = 'https://jsonplaceholder.typicode.com/posts';
const ingredients_url = 'https://norma.nomoreparties.space/api/ingredients';

// export const incrementBy = createAction('incrementBy');
// const decrement = createAction('decrement')

const initialState = {
  ingredients: [],
  status: 'idle',
  error: null,
};

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async () => {
    try {
      const response = await fetch(ingredients_url);
      if (response.ok) {
        const ingredients = await response.json();
        return [...ingredients.data];
      } else {
        console.error('This promise should never be entered');
      }
    } catch (err) {
      return err.message;
    }
  }
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    increment: (state, action) => {
      const ingredientId = action.payload;

      const existingIngredients = state.ingredients.find(
        (ingredient) => ingredient._id === ingredientId
      );

      if (existingIngredients) {
        existingIngredients.qty++;
      }
    },
    decrement(state, action) {
      const ingredientId = action.payload;
      console.log(ingredientId);
      const existingIngredients = state.ingredients.find(
        (ingredient) => ingredient._id === ingredientId
      );
      console.log(current(existingIngredients));
      if (existingIngredients) {
        existingIngredients.qty--;
      }
    },
    resetBunQty(state, action) {
      const toggledQty = state.ingredients.filter(
        (ingredient) => ingredient.type === 'bun'
      );
      toggledQty.map((item) => (item.qty = 0));
    },
    resetQty(state, action) {
      state.ingredients.map((item) => (item.qty = 0));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchIngredients.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload) {
          const loadedIngredients = action.payload.map((ingredient) => {
            ingredient.qty = 0;
            return ingredient;
          });
          state.ingredients = state.ingredients.concat(loadedIngredients);
        }
        return;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllIngredients = (state) => state.ingredients.ingredients;
export const getIngredientsStatus = (state) => state.ingredients.status;
export const getIngredientsError = (state) => state.ingredients.error;

export const { increment, decrement, resetBunQty, resetQty } =
  ingredientsSlice.actions;

export default ingredientsSlice.reducer;
