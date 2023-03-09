import cardStyle from './card.module.css';

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

export default Card;
