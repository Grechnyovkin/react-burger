import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';

import cardIngStyle from './card-ingridient.module.css';

function CardIngridient({ card }) {
  const getCounter = () => {
    const count = Math.floor(Math.random() * 2);
    if (count === 0) return null;
    return count;
  };

  const counter = useMemo(() => getCounter(), []);

  return (
    <div className={cardIngStyle.card}>
      {counter && (
        <div className={cardIngStyle.counter}>
          <span>{counter}</span>
        </div>
      )}

      <img src={card.image} alt={card.name} />
      <div className={cardIngStyle.price}>
        <span className={cardIngStyle.currency}>{card.price}</span>
        <CurrencyIcon />
      </div>
      <div className={cardIngStyle.name}>{card.name}</div>
    </div>
  );
}

export default CardIngridient;
