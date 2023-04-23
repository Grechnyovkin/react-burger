import PropTypes from 'prop-types';
import constStyle from './burger-constructor.module.css';
import { useState } from 'react';
import Modal from '../ui/modal/modal';
import OrderDatails from '../order-details/order-details';
import ConstructorList from './constructor-list';
import Order from './order';
import { resetIngredientOrder } from '../order-details/orderSlice';

import ConstructorBun from './constructor-bun';

import { useAppDispatch, useAppSelector } from '../app/hooks';

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  // const { ingredients } = useAppSelector((state) => state.ingredients);
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    dispatch(resetIngredientOrder());
    setVisible(false);
  };

  return (
    <section id="constructor">
      <div className={`${constStyle.cards} pt-25`}>
        <div className={`${constStyle.line} pl-8 `}>
          <ConstructorBun pos={'(верх)'} accept={['bun']} index />
        </div>

        <ConstructorList accept={['sauce', 'main']} />

        <div className={`${constStyle.line} pl-8 `}>
          <ConstructorBun pos={'(низ)'} accept={['bun']} />
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

export default BurgerConstructor;
