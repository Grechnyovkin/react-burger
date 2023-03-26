import ConstructorItem from './constructor-item';
import { useAppSelector } from '../app/hooks';

import constStyle from './burger-constructor.module.css';

const ConstructorList = () => {
  const { constructors } = useAppSelector((state) => state.constructors);

  return (
    <scroll-container>
      <ul className={constStyle.scrolls}>
        {constructors.map((ingredient, index) => (
          <ConstructorItem key={index} {...ingredient} />
        ))}
      </ul>
    </scroll-container>
  );
};

export default ConstructorList;
