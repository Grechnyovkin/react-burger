import cls from './order-details.module.css';
import graphics from '../../images/graphics.svg';
import { useAppSelector } from '../app/hooks';

const OrderDatails = () => {
  const { orderId } = useAppSelector((state) => state.order);
  return (
    <>
      <div className={`${cls.order_id} pt-5`}>{orderId}</div>
      <div className={`${cls.title_id} pt-8`}>ИДЕНТИФИКАТОР ЗАКАЗА</div>
      <img className={`${cls.image} pt-15`} src={graphics} alt="ok" />
      <div className={`${cls.info__title} pt-15`}>
        Ваш заказ начали готовить
      </div>
      <div className={`${cls.info__text} pt-2 pb-10`}>
        Дождитесь готовности на орбитальной станции
      </div>
    </>
  );
};

export default OrderDatails;
