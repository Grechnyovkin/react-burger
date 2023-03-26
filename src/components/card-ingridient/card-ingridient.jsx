import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo, useState } from 'react';
import InghriedienDetails from '../ingredient-details/ingredient-details';
import Modal from '../ui/modal/modal';
import PropTypes from 'prop-types';
import cardIngStyle from './card-ingridient.module.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { detail, resetDetail } from '../ingredient-details/detailSlice';
import { useDrag } from 'react-dnd';

function CardIngridient({ card }) {
  const { _id, name, image, price } = card;

  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);

  const [_, dragRef] = useDrag({
    type: 'default',
    item: { _id },
    collect: (monitor) => ({
      isDrag: monitor.didDrop(),
    }),
  });

  const openModal = (card) => {
    dispatch(detail({ card }));
    setVisible(true);
  };
  const closeModal = () => {
    dispatch(resetDetail());
    setVisible(false);
  };

  return (
    <>
      <div
        className={cardIngStyle.card}
        ref={dragRef}
        onClick={() => openModal({ ...card })}
      >
        {card.qty !== 0 ? (
          <div className={cardIngStyle.counter}>
            <span>{card.qty}</span>
          </div>
        ) : null}

        <img src={image} alt={name} />
        <div className={cardIngStyle.price}>
          <span className={cardIngStyle.currency}>{price}</span>
          <CurrencyIcon />
        </div>
        <div className={cardIngStyle.name}>{name}</div>
      </div>

      {visible && (
        <Modal onClose={() => closeModal()} title="Детали ингидиента">
          <InghriedienDetails {...card} />
        </Modal>
      )}
    </>
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

export default CardIngridient;
