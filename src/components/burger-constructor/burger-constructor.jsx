import {
  LockIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import data from '../../utils/data';
import constStyle from './burger-constructor.module.css';
import Card from '../card/card';
import { useMemo } from 'react';

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

const bun = 'bun';

const BurgerConstructor = () => {
  const ingredients = useMemo(() => data.filter((e) => e.type !== bun), []);
  return (
    <section id="constructor">
      <div className={`${constStyle.cards} pt-25`}>
        <div className={`${constStyle.line} pl-8 `}>
          <div className={`${constStyle.card} pl-6 pr-8 pt-4 pb-4`}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02.png"
              alt=">Соус Spicy-X"
            />
            <div className={`${constStyle.name} `}>
              Краторная булка N-200i (верх)
            </div>
            <div className={`${constStyle.price}`}>
              <span className={`${constStyle.currency}`}>20</span>
              <CurrencyIcon />
            </div>

            <div>
              <LockIcon type="secondary" />
            </div>
          </div>
        </div>
        <scroll-container>
          <ul className={constStyle.scrollitem}>
            {ingredients.map((card, i) => {
              return <Card key={i} card={card} />;
            })}
          </ul>
        </scroll-container>
        <div className={`${constStyle.line} pl-8 `}>
          <div className={`${constStyle.card} pl-6 pr-8 pt-4 pb-4`}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02.png"
              alt=">Соус Spicy-X"
            />
            <div className={`${constStyle.name} `}>
              Краторная булка N-200i (низ)
            </div>
            <div className={`${constStyle.price}`}>
              <span className={`${constStyle.currency}`}>20</span>
              <CurrencyIcon />
            </div>

            <div>
              <LockIcon type="secondary" />
            </div>
          </div>
        </div>
      </div>
      <div className={constStyle.buy}>
        <div className={constStyle.total}>
          <span className={constStyle.currency}>
            <p className="text text_type_digits-medium">610</p>
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
