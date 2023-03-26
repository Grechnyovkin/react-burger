import PropTypes from 'prop-types';
import constStyle from './burger-constructor.module.css';
import Card from '../card/card';
import { useState } from 'react';
import Modal from '../ui/modal/modal';
import OrderDatails from '../order-details/order-details';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import ConstructorBun from './constructor-bun';
import ConstructorList from './constructor-list';
import Order from './order';
import { resetIngredientOrder } from '../order-details/orderSlice';

import { useDrop } from 'react-dnd';
import { logRoles } from '@testing-library/react';
import { bunQty, resetQty, upQty } from '../burger-ingredients/ingredientSlice';
import { addIngredient, replaceBun, setTotal } from './constructorSlice';

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const { bun } = useAppSelector((state) => state.constructors);
  const bunId = bun.id;
  const { ingredients } = useAppSelector((state) => state.ingredients);
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    dispatch(resetIngredientOrder());
    setVisible(false);
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'default',
    drop(itemId) {
      newCIngredient(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.didDrop,
    }),
  });

  const newCIngredient = (id) => {
    const element = ingredients.find((item) => item._id === id._id);
    const ids = element._id;
    if (element.type === 'bun') {
      dispatch(resetQty(bunId));
      dispatch(bunQty({ id: ids }));
      dispatch(
        replaceBun({
          id: element._id,
          name: element.name,
          price: element.price,
          image: element.image,
        })
      );
      dispatch(setTotal());
    } else {
      dispatch(upQty({ id: ids }));
      dispatch(
        addIngredient({
          id: element._id,
          name: element.name,
          price: element.price,
          image: element.image,
        })
      );
      dispatch(setTotal());
    }
  };

  return (
    <section id="constructor" ref={dropTarget}>
      <div className={`${constStyle.cards} pt-25`}>
        <div className={`${constStyle.line} pl-8 `}>
          <ConstructorBun pos={'(верх)'} />
        </div>

        <ConstructorList />

        <div className={`${constStyle.line} pl-8 `}>
          <ConstructorBun pos={'(низ)'} />
        </div>
      </div>
      <Order setVisible={setVisible} />
      {visible && (
        <Modal visible={visible} onClose={() => closeModal()}>
          <OrderDatails />
        </Modal>
      )}
    </section>
  );
};

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

export default BurgerConstructor;
