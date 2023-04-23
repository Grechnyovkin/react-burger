import { useDrag, useDrop } from 'react-dnd';

import { removeIngredient, setTotal } from './constructorSlice';
import { useRef } from 'react';
import cardStyle from './constructor-item.module.css';

import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useAppDispatch } from '../app/hooks';
import { decrement } from '../burger-ingredients/ingredientSlice';

const ConstructorItem = ({ ingredient, index, moveCardHandler }) => {
  const { id, cid, name, price, image } = ingredient;
  // console.log(ingredient);
  const dispatch = useAppDispatch();
  const remove = () => {
    dispatch(removeIngredient({ cid }));
    dispatch(decrement(id));
    dispatch(setTotal());
  };
  const ref = useRef(null);
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ['sauce', 'main'],
    // drop: onDrop,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCardHandler(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'main',

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const isActive = isOver && canDrop;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <li className={`${cardStyle.line}`} ref={ref}>
      <div className={cardStyle.drag}>
        <DragIcon type="primary" />
      </div>
      <div
        className={`${cardStyle.card} pl-6  pr-8 pt-4 pb-4`}
        style={{ backgroundColor }}
      >
        <img src={ingredient.image} alt={ingredient.name} />
        <div className={cardStyle.name}>{ingredient.name}</div>
        <div className={cardStyle.price}>
          <span className={cardStyle.currency}>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <DeleteIcon type="primary" onClick={() => remove()} />
      </div>
    </li>
  );
};

export default ConstructorItem;
