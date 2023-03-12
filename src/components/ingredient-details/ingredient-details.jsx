import cls from './ingredient-details.module.css';

const InghriedienDetails = (props) => {
  const { card } = props;
  return (
    <>
      <img className={`${cls.images} pt-4`} src={card.image} alt={card.name} />
      <div className={cls.modalname}>{card.name}</div>
      <div className={`${cls.info} pt-8`}>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Калории, ккал</div>
          <div className={cls.info__number}>{card.calories}</div>
        </div>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Белки, г</div>
          <div className={cls.info__number}>{card.proteins}</div>
        </div>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Жиры, г</div>
          <div className={cls.info__number}>{card.fat}</div>
        </div>
        <div className={cls.info__item}>
          <div className={cls.info__title}>Углеводы, г</div>
          <div className={cls.info__number}>{card.carbohydrates}</div>
        </div>
      </div>
    </>
  );
};

export default InghriedienDetails;
