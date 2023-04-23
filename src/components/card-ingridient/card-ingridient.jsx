import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import cardIngStyle from './card-ingridient.module.css';
import { detail, resetDetail } from '../ingredient-details/detailSlice';

import InghriedienDetails from '../ingredient-details/ingredient-details';
import Modal from '../ui/modal/modal';
import { useState } from 'react';
import { useRef } from 'react';
import { useDrag } from 'react-dnd';

import {
  addIngredient,
  replaceBun,
  setTotal,
} from '../burger-constructor/constructorSlice';
import { useAppDispatch } from '../app/hooks';
import { increment, resetBunQty } from '../burger-ingredients/ingredientSlice';

function CardIngridient({ card }) {
  const { _id, name, image, price, type, qty } = card;
  const dispatch = useAppDispatch();

  const changeItem = (item) => {
    if (type === 'bun') {
      dispatch(
        replaceBun({
          id: _id,
          name: name,
          price: price,
          image: image,
        })
      );
      dispatch(resetBunQty());
      dispatch(increment(item._id));
      dispatch(increment(item._id));
    } else {
      dispatch(
        addIngredient({
          id: _id,
          name: name,
          price: price,
          image: image,
        })
      );
      dispatch(increment(item._id));
    }
    dispatch(setTotal());
  };

  const [visible, setVisible] = useState(false);

  const openModal = (card) => {
    dispatch(detail({ card }));
    setVisible(true);
  };
  const closeModal = () => {
    dispatch(resetDetail());
    setVisible(false);
  };

  const ref = useRef(null);

  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { _id },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (dropResult) changeItem(item);
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type]
  );

  drag(ref);
  return (
    <>
      <div className={cardIngStyle.card} onClick={() => openModal({ ...card })}>
        {card.qty !== 0 ? (
          <div className={cardIngStyle.counter}>
            <span>{card.qty}</span>
          </div>
        ) : null}

        <img ref={ref} src={image} alt={name} />
        <div className={cardIngStyle.price}>
          <span className={cardIngStyle.currency}>{price}</span>
          <CurrencyIcon />
        </div>
        <div className={cardIngStyle.name}>{name}</div>
      </div>

      {visible && (
        <Modal onClose={() => closeModal()} title="Детали ингидиента">
          <InghriedienDetails card={card} />
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
