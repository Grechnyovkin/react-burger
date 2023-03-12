import cardStyle from './card.module.css';
import PropTypes from 'prop-types';

import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Card({ card }) {
  return (
    <li className={`${cardStyle.line}`}>
      <div className={cardStyle.drag}>
        <DragIcon type="primary" />
      </div>
      <div className={`${cardStyle.card} pl-6  pr-8 pt-4 pb-4`}>
        <img src={card.image} alt={card.name} />
        <div className={cardStyle.name}>{card.name}</div>
        <div className={cardStyle.price}>
          <span className={cardStyle.currency}>{card.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <DeleteIcon type="primary" />
      </div>
    </li>
  );
}

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

export default Card;
