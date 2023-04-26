import {
  LockIcon,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import constStyle from './burger-constructor.module.css';

import { useAppSelector } from '../../hooks/hooks';
import { useDrop } from 'react-dnd';
import { useRef } from 'react';

const style = {
  marginRight: '1.5rem',
  color: 'var(--text-inactive-color)',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
};

const ConstructorBun = ({ accept, pos }) => {
  const bun = useAppSelector((state) => state.constructors.bun);

  const ref = useRef(null);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let borderRadius = '5px 5px 5px 5px';
  if (pos === '(верх)') {
    borderRadius = '50px 50px 5px 5px';
  } else {
    borderRadius = '5px 5px 50px 50px';
  }

  const isActive = isOver && canDrop;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  drop(ref);
  return (
    <div ref={ref} style={{ width: '100%' }}>
      {!bun ? (
        <div
          className="pl-6 pr-6 pt-4 pb-4"
          style={{ ...style, borderRadius, backgroundColor }}
        >
          {`Булка ${pos}`}
        </div>
      ) : (
        <div
          className={`${constStyle.card} pl-6 pr-8 pt-4 pb-4`}
          style={{ borderRadius, backgroundColor }}
        >
          <img src={bun.image} alt={bun.name} />
          <div className={`${constStyle.name} `}>
            {bun.name} {pos}
          </div>
          <div className={`${constStyle.price}`}>
            <span className={`${constStyle.currency}`}>{bun.price} </span>
            <CurrencyIcon />
          </div>

          <div>
            <LockIcon type="secondary" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstructorBun;
