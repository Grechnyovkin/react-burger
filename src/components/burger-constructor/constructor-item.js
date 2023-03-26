import { useAppDispatch } from '../app/hooks';
import { downQty } from '../burger-ingredients/ingredientSlice';
import { removeIngredient, setTotal } from './constructorSlice';
import cardStyle from './constructor-item.module.css';

import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorItem = (ingredient) => {
  console.log(ingredient);
  const { id, cid, name, price, image } = ingredient;
  const dispatch = useAppDispatch();
  console.log(id);
  const remove = () => {
    dispatch(removeIngredient({ cid }));
    dispatch(downQty({ id }));
    dispatch(setTotal());
  };

  return (
    <>
      <li className={`${cardStyle.line}`}>
        <div className={cardStyle.drag}>
          <DragIcon type="primary" />
        </div>
        <div className={`${cardStyle.card} pl-6  pr-8 pt-4 pb-4`}>
          <img src={image} alt={name} />
          <div className={cardStyle.name}>{name}</div>
          <div className={cardStyle.price}>
            <span className={cardStyle.currency}>{price}</span>
            <CurrencyIcon type="primary" />
          </div>
          <DeleteIcon type="primary" onClick={() => remove()} />
        </div>
      </li>
    </>
  );
};

export default ConstructorItem;
