import { useAppSelector } from '../app/hooks';
import {
  LockIcon,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import constStyle from './burger-constructor.module.css';
const ConstructorBun = ({ pos }) => {
  const bun = useAppSelector((state) => state.constructors.bun);
  return (
    <>
      <div className={`${constStyle.card} pl-6 pr-8 pt-4 pb-4`}>
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
    </>
  );
};

export default ConstructorBun;
