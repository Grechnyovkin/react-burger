import { cardPropsTypes } from '../../utils/types';
import cls from './ingredient-details.module.css';

const InghriedienDetails = ({ card }) => {
  const { name, calories, proteins, fat, carbohydrates, image } = card;
  return (
    <>
      <img className={`${cls.images} pt-4`} src={image} alt={name} />
      <div className={cls.modalname}>{name}</div>
      <div className={`${cls.info} pt-8`}>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Калории, ккал</div>
          <div className={cls.info__number}>{calories}</div>
        </div>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Белки, г</div>
          <div className={cls.info__number}>{proteins}</div>
        </div>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Жиры, г</div>
          <div className={cls.info__number}>{fat}</div>
        </div>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Углеводы, г</div>
          <div className={cls.info__number}>{carbohydrates}</div>
        </div>
      </div>
    </>
  );
};

InghriedienDetails.propTypes = {
  card: cardPropsTypes.isRequired,
};

export default InghriedienDetails;
