import { useEffect, useState } from 'react';
import appStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Loader from '../ui/loader/loader';

function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients';

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [ingrediens, setIngrediens] = useState([]);

  async function fetchMovies(url: string) {
    // eslint-disable-next-line
    const response = await fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setIngrediens(result.data);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      )
      .catch((error) => {
        setIsLoaded(false);
        setError(error);
        console.log(error);
      });
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchMovies(url);
    }, 1000);
    return () => clearTimeout(delay);
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
