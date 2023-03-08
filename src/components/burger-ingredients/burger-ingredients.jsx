import {
  Tab,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import data from '../../utils/data';
import tabStyle from './burger-ingredients.module.css';

const cardPropsTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __V: PropTypes.number,
});

Card.propTypes = {
  card: cardPropsTypes.isRequired,
};

Section.propTypes = {
  data: PropTypes.arrayOf(cardPropsTypes).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

BurgerIngredients.propTypes = {
  sections: PropTypes.arrayOf(Section),
};

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
            // onClick={() => updateCurrent('one')}
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

      <scroll-container style={{ maxHeight: 850 }}>
        <Section data={data} type={'bun'} title="Булки" />
        <Section data={data} type={'sauce'} title="Соусы" />
        <Section data={data} type={'main'} title="Начинки" />
      </scroll-container>
    </section>
  );
}

export default BurgerIngredients;

function Section({ data, type, title }) {
  const arr = data.filter((e) => e.type === type);
  return (
    <section id={type} title={title}>
      <h1 className={tabStyle.headline} style={{ paddingTop: 0 }}>
        {title}
      </h1>
      <div className={tabStyle.cards}>
        {arr.map((card, i) => {
          return <Card key={i} card={card} />;
        })}
      </div>
    </section>
  );
}

function getCounter() {
  const counter = Math.floor(Math.random() * 2);
  if (counter === 0) return null;
  return (
    <div className={tabStyle.counter}>
      <span>{counter}</span>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className={tabStyle.card}>
      {getCounter()}
      <img src={card.image} alt={card.name} />
      <div className={tabStyle.price}>
        <span className={tabStyle.currency}>{card.price}</span>
        <CurrencyIcon />
      </div>
      <div className={tabStyle.name}>{card.name}</div>
    </div>
  );
}
