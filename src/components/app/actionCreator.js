import {
  inghredientsFetchingSuccess,
  inghredientsFetchingError,
  inghredientsFetching,
} from '../burger-ingredients/ingredientSlice';

const url = 'https://norma.nomoreparties.space/api/ingredients';

const fetchIngredients = () => async (dispatch) => {
  try {
    dispatch(inghredientsFetching);
    const response = await fetch(url);
    const ingredients = await response.json();
    dispatch(inghredientsFetchingSuccess(ingredients.data));
  } catch (error) {
    dispatch(inghredientsFetchingError(`Error-test: Loading false`));
  }
};

export default fetchIngredients;
