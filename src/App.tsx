import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="wrapper">
        <main className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 40,
            }}
          >
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
