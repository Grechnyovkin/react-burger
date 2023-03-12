import { useEffect, useState } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Loader from '../ui/loader/loader';
const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [ingrediens, setIngrediens] = useState([]);

  async function fetchMovies(url: string) {
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          setIsLoaded(false);
          setError(error);
        }
        return response.json();
      })
      .then((result) => {
        setIsLoaded(false);
        setIngrediens(result.data);
      })
      .catch((error) => {
        setIsLoaded(false);
        setError(error);
      });
  }

  useEffect(() => {
    fetchMovies(url);
  }, []);

  if (error) {
    return (
      <div className={appStyle.error}>{error && <h1>Произошла ошибка</h1>}</div>
    );
  }
  return (
    <div className="App">
      {isLoaded && (
        <div>
          <Loader />
        </div>
      )}
      <AppHeader />
      <div className="wrapper">
        <main className="container">
          <div className={appStyle.grid}>
            <BurgerIngredients ingrediens={ingrediens} />
            <BurgerConstructor ingrediens={ingrediens} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
