import ConstructorItem from './constructor-item';

import constStyle from './burger-constructor.module.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import { useDrop } from 'react-dnd';
import { useRef } from 'react';

import { replaceConctructor } from './constructorSlice';

const style = {
  marginRight: '1.5rem',

  color: 'var(--text-inactive-color)',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
};

const ConstructorList = ({ accept, onDrop }) => {
  const { constructors } = useAppSelector((state) => state.constructors);

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(constructors);
  }, [constructors]);

  const dispatch = useAppDispatch();

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = constructors[dragIndex];
    if (dragItem) {
      const coppiedStateArray = [...constructors];

      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
      dispatch(replaceConctructor(coppiedStateArray));
    }
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ['sauce', 'main'],
    // drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let borderRadius = '5px 5px 5px 5px';

  const ref = useRef(null);

  const isActive = isOver && canDrop;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  drop(ref);

  return (
    <scroll-container>
      <ul className={`${constStyle.scrolls}`} ref={ref}>
        {!items.length ? (
          <li className="pl-8">
            <div
              className="pl-6 pr-8 pt-4 pb-4"
              style={{ ...style, borderRadius, backgroundColor }}
            >
              Ингредиенты
            </div>
          </li>
        ) : (
          items.map((ingredient, index) => (
            <ConstructorItem
              key={ingredient.cid}
              index={index}
              moveCardHandler={moveCardHandler}
              ingredient={ingredient}
            />
          ))
        )}
      </ul>
    </scroll-container>
  );
};

export default ConstructorList;
