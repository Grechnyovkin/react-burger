import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import constStyle from './burger-constructor.module.css';
import { resetConctructor } from './constructorSlice';
import { addIngredientOrder } from '../order-details/orderSlice';

import { useAppDispatch, useAppSelector } from '../../services/hooks';

import { addNewOrder } from '../order-details/orderSlice';
import { useState } from 'react';
import { resetQty } from '../burger-ingredients/ingredientSlice';

const Order = ({ openModal, setOrderDataDetails }) => {
  const dispatch = useAppDispatch();
  const [addRequectStaus, setAddRequestStatus] = useState('idle');
  const { total, bun, constructors } = useAppSelector(
    (state) => state.constructors
  );

  const canSave =
    [bun, constructors.length].every(Boolean) && addRequectStaus === 'idle';

  const onSaveOrder = async () => {
    try {
      setAddRequestStatus('pending');
      const test = (await dispatch(addNewOrder())).payload;
      if (!test.success) {
        console.error("Can't add order - Server error");
      } else {
        setOrderDataDetails(test);
        // setVisible(true);
        openModal();
      }
    } catch (err) {
      console.error('Server error', err);
    } finally {
      setAddRequestStatus('idle');
    }
  };

  const checkout = () => {
    if (canSave) {
      const ingredientsOrder = [...constructors, bun];

      const ingredients = ingredientsOrder.map((ingredient) => ingredient.id);

      const totalPrice = ingredientsOrder.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      dispatch(addIngredientOrder({ ingredients, totalPrice }));
      onSaveOrder();

      dispatch(resetConctructor());
      dispatch(resetQty());
    } else {
      console.error('filed to save the order');
    }
  };

  return (
    <>
      <div className={constStyle.buy}>
        <div className={constStyle.total}>
          <span className={constStyle.currency}>
            <p className="text text_type_digits-medium">{total}</p>
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => checkout()}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
};

export default Order;
