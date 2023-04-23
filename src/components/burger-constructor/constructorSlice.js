import { createSlice, nanoid } from '@reduxjs/toolkit';

const constructorSlice = createSlice({
  name: 'constructors',
  initialState: {
    bun: null,
    constructors: [],
    total: 0,
  },
  reducers: {
    addIngredient(state, action) {
      state.constructors.push({
        id: action.payload.id,
        cid: nanoid(),
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        qty: 1,
      });
    },
    removeIngredient(state, action) {
      state.constructors = state.constructors.filter(
        (ingredient) => ingredient.cid !== action.payload.cid
      );
    },
    replaceBun(state, action) {
      state.bun = {
        id: action.payload.id,
        cid: nanoid(),
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        qty: 2,
      };
    },
    replaceConctructor(state, action) {
      state.constructors = action.payload;
    },
    setTotal(state) {
      let bunPrice = 0;
      if (state.bun) {
        bunPrice = state.bun.price * state.bun.qty;
        state.total = bunPrice;
      } else {
        state.total = bunPrice;
      }

      if (state.constructors.length) {
        const ingPrice = state.constructors.reduce(
          (acc, item) => acc + item.price,
          0
        );
        state.total = bunPrice + ingPrice;
      } else {
        state.total = bunPrice;
      }
    },
    resetConctructor(state) {
      state.constructors = [];
      state.total = 0;
      state.bun = null;
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  replaceBun,
  setTotal,
  resetConctructor,
  replaceConctructor,
} = constructorSlice.actions;

export default constructorSlice.reducer;
