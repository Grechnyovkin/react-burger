import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="wrapper">
        <main className="container">
          <div className={styles.grid}>
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
