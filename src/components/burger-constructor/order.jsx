import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import constStyle from './burger-constructor.module.css';
import { resetConctructor } from './constructorSlice';
import { addIngredientOrder } from '../order-details/orderSlice';
import { resetQtyOrder } from '../burger-ingredients/ingredientSlice';

const Order = ({ setVisible }) => {
  const dispatch = useAppDispatch();
  const { total, bun, constructors } = useAppSelector(
    (state) => state.constructors
  );

  const getOrderId = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  const orderId = getOrderId();

  const checkout = () => {
    const bn = [];

    bn.push({
      id: bun.id,
      name: bun.name,
      qty: bun.qty,
      price: bun.price,
    });

    const ingredients = [...bn, ...constructors];
    const totalPrice = ingredients.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    const discount = 0;
    dispatch(
      addIngredientOrder({ orderId, ingredients, discount, totalPrice })
    );
    dispatch(resetConctructor());
    dispatch(resetQtyOrder());
    setVisible(true);
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
