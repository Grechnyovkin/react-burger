import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

import ingredientReducer from './ingredientSlice';
import constructorReducer from './constructorSlice';
import detailReducer from './detailSlice';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  constructors: constructorReducer,
  detail: detailReducer,
  order: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
