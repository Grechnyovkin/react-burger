import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import cardIngStyle from './card-ingridient.module.css';
import { detail, resetDetail } from '../services/detailSlice';

import InghriedienDetails from '../ingredient-details/ingredient-details';
import Modal from '../ui/modal/modal';
import { useState } from 'react';
import { useRef } from 'react';
import { useDrag } from 'react-dnd';

import {
  addIngredient,
  replaceBun,
  setTotal,
} from '../services/constructorSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { increment, resetBunQty } from '../services/ingredientSlice';
import { cardPropsTypes } from '../../utils/types';
import { useModal } from '../../hooks/useModal';

function CardIngridient({ card }) {
  const { _id, name, image, price, type, qty } = card;
  const dispatch = useAppDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();

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

  const openUseModal = (card) => {
    dispatch(detail({ card }));
    openModal();
  };
  const closeUseModal = () => {
    dispatch(resetDetail());
    closeModal();
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
      <div
        className={cardIngStyle.card}
        onClick={() => openUseModal({ ...card })}
      >
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

      {isModalOpen && (
        <Modal onClose={() => closeUseModal()} title="Детали ингидиента">
          <InghriedienDetails card={card} />
        </Modal>
      )}
    </>
  );
}

CardIngridient.propTypes = {
  card: cardPropsTypes.isRequired,
};

export default CardIngridient;
