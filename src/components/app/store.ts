import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

import ingredientReducer from '../burger-ingredients/ingredientSlice';
import constructorReducer from '../burger-constructor/constructorSlice';
import detailReducer from '../ingredient-details/detailSlice';
import orderReducer from '../order-details/orderSlice';

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
