import { createSlice } from '@reduxjs/toolkit';

const constructorSlice = createSlice({
  name: 'constructors',
  initialState: {
    bun: {
      id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i ',
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      qty: 2,
      price: 1255,
    },
    constructors: [],
    total: 2510,
  },
  reducers: {
    addIngredient(state, action) {
      state.constructors.push({
        id: action.payload.id,
        cid: new Date().toISOString(),
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
      state.bun.id = action.payload.id;
      state.bun.price = action.payload.price;
      state.bun.name = action.payload.name;
      state.bun.image = action.payload.image;
    },
    setTotal(state) {
      const bunPrice = state.bun.price * state.bun.qty;
      if (state.constructors.length !== null) {
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
      state.total = 2510;
      state.bun = {
        id: '60d3b41abdacab0026a733c6',
        name: 'Краторная булка N-200i ',
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        qty: 2,
        price: 1255,
      };
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  replaceBun,
  setTotal,
  resetConctructor,
} = constructorSlice.actions;

export default constructorSlice.reducer;
