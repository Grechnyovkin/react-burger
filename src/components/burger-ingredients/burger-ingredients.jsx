import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CardIngridient from '../card-ingridient/card-ingridient';
import tabStyle from './burger-ingredients.module.css';
import Section from '../section/section';

function BurgerIngredients({ ingrediens }) {
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
          <Section data={ingrediens} type={'bun'} title="Булки" />
          <Section data={ingrediens} type={'sauce'} title="Соусы" />
          <Section data={ingrediens} type={'main'} title="Начинки" />
        </div>
      </scroll-container>
    </section>
  );
}

const cardIngridientPropsTypes = PropTypes.shape({
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

CardIngridient.propTypes = {
  card: cardIngridientPropsTypes.isRequired,
};

Section.propTypes = {
  data: PropTypes.arrayOf(cardIngridientPropsTypes).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

BurgerIngredients.propTypes = {
  sections: PropTypes.arrayOf(Section),
};

export default BurgerIngredients;
