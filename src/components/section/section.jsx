import sectionStyle from './section.module.css';
import CardIngridient from '../card-ingridient/card-ingridient';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const Section = ({ data, type, title }) => {
  const arr = useMemo(() => data.filter((e) => e.type === type), [data, type]);
  return (
    <section id={type} title={title}>
      <h1 className={sectionStyle.headline} style={{ paddingTop: 0 }}>
        {title}
      </h1>
      <div className={sectionStyle.cards}>
        {arr.map((card, i) => {
          return <CardIngridient key={i} card={card} />;
        })}
      </div>
    </section>
  );
};

const cardIngridientPropsTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __V: PropTypes.number,
});

Section.propTypes = {
  data: PropTypes.arrayOf(cardIngridientPropsTypes).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
