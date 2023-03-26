import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import InghriedienDetails from '../ingredient-details/ingredient-details';
import Modal from '../ui/modal/modal';
import PropTypes from 'prop-types';
import cardIngStyle from './card-ingridient.module.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { upQty, resetQty, bunQty } from '../burger-ingredients/ingredientSlice';
import {
  addIngredient,
  replaceBun,
  setTotal,
} from '../burger-constructor/constructorSlice';
import { detail, resetDetail } from '../ingredient-details/detailSlice';

function CardIngridient({ card, onDropHandler }) {
  const { _id, name, type, image, price } = card;
  const dispatch = useAppDispatch();

  const { bun } = useAppSelector((state) => state.constructors);
  const bunId = bun.id;

  const [visible, setVisible] = useState(false);

  const newCIngredient = (id) => {
    if (type === 'bun') {
      dispatch(resetQty(bunId));
      dispatch(bunQty({ id }));
      dispatch(replaceBun({ id, name, price, image }));
      dispatch(setTotal());
    } else {
      dispatch(upQty({ id }));
      dispatch(addIngredient({ id, name, price, image }));
      dispatch(setTotal());
    }
  };

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
      <div className={cardIngStyle.card} onClick={() => openModal({ ...card })}>
        {card.qty !== 0 ? (
          <div className={cardIngStyle.counter}>
            <span>{card.qty}</span>
          </div>
        ) : null}

        <button
          className={cardIngStyle.delete}
          onClick={() => newCIngredient(_id)}
        >
          +
        </button>

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
    // )
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
