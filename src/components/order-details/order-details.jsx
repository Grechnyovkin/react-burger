import cls from './order-details.module.css';
import graphics from '../../images/graphics.svg';

const OrderDatails = ({ orderDataDetails }) => {
  const { name, order } = orderDataDetails;
  return (
    <>
      <div className={`${cls.order_id} pt-5`}>{order.number}</div>
      <div className={`${cls.title_id} pt-8`}>{name}</div>
      <img className={`${cls.image} pt-15`} src={graphics} alt="ok" />
      <div className={`${cls.info__title} pt-15`}>
        Ваш заказ начали готовить{' '}
      </div>
      <div className={`${cls.info__text} pt-2 pb-10`}>
        Дождитесь готовности на орбитальной станции
      </div>
    </>
  );
};
export default OrderDatails;
