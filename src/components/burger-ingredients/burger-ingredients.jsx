import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import tabStyle from './burger-ingredients.module.css';
import Section from '../section/section';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one');

  const types = [
    { type: 'bun', value: 'one', title: 'Булки' },
    { type: 'sauce', value: 'two', title: 'Соусы' },
    { type: 'main', value: 'three', title: 'Начинки' },
  ];

  const contRef = useRef();

  return (
    <section id="ingredients">
      <h1 className="main-title">Соберите бургер</h1>
      <div className={tabStyle.ingredientBox}>
        <a href="#bun">
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
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
      <scroll-container id="obs" ref={contRef}>
        <div className={tabStyle.scrollHeight}>
          {types.map((item, i) => (
            <Section
              key={i}
              type={item.type}
              title={item.title}
              handleActive={setCurrent}
              value={item.value}
            />
          ))}
        </div>
      </scroll-container>
    </section>
  );
};

BurgerIngredients.propTypes = {
  sections: PropTypes.arrayOf(Section),
};

export default BurgerIngredients;
