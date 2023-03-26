import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import tabStyle from './burger-ingredients.module.css';
import Section from '../section/section';

function BurgerIngredients() {
  const [current, setCurrent] = useState('one');

  return (
    <section id="ingredients">
      <h1 className="main-title">Соберите бургер</h1>
      <div style={{ display: 'flex', marginTop: 20, marginBottom: 40 }}>
        <a href="#bun">
          <Tab
            value="one"
            active={current === 'one'}
            className={current === 'one' ? tabStyle.test : null}
            onClick={setCurrent}
          >
            Булки
          </Tab>
        </a>
        <a href="#sauce">
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a href="#main">
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>
      <scroll-container>
        <div className={tabStyle.scrollHeight} style={{ maxHeight: 600 }}>
          <Section type={'bun'} title="Булки" />
          <Section type={'sauce'} title="Соусы" />
          <Section type={'main'} title="Начинки" />
        </div>
      </scroll-container>
    </section>
  );
}

BurgerIngredients.propTypes = {
  sections: PropTypes.arrayOf(Section),
};

export default BurgerIngredients;
