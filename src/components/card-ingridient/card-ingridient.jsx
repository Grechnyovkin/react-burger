import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo, useState } from 'react';
import InghriedienDetails from '../ingredient-details/ingredient-details';
import Modal from '../ui/modal/modal';
import PropTypes from 'prop-types';
import cardIngStyle from './card-ingridient.module.css';

function CardIngridient({ card }) {
  const [visible, setVisible] = useState(false);
  const getCounter = () => {
    const count = Math.floor(Math.random() * 2);
    if (count === 0) return null;
    return count;
  };

  const counter = useMemo(() => getCounter(), []);

  return (
    <>
      <div className={cardIngStyle.card} onClick={() => setVisible(true)}>
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

      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        title="Детали ингидиента"
      >
        <InghriedienDetails card={card} />
      </Modal>
    </>
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

InghriedienDetails.propTypes = {
  card: cardPropsTypes.isRequired,
};
export default CardIngridient;
