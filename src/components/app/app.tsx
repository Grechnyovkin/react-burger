import { useEffect } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Loader from '../ui/loader/loader';
import { useAppDispatch, useAppSelector } from './hooks';
import fetchIngredients from './actionCreator';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <AppHeader />
      <div className="wrapper">
        <main className="container">
          <div className={appStyle.grid}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
