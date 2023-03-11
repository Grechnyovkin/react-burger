import React from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="wrapper">
        <main className="container">
          <div className={appStyle.grid}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
