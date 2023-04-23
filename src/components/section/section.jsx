import sectionStyle from './section.module.css';
import PropTypes from 'prop-types';
import { useMemo, useRef, useState } from 'react';

import { useAppSelector } from '../app/hooks';
import useElementOnScreen from '../../hooks/useElementOnScreen';
// import { useInView } from 'react-intersection-observer';
import CardIngridient from '../card-ingridient/card-ingridient';

const Section = ({ type, title, handleActive, value }) => {
  const { ingredients } = useAppSelector((store) => store.ingredients);
  // const [currentTab, setCurrentTab] = useState('bun')
  const arr = useMemo(
    () => ingredients.filter((e) => e.type === type),
    [ingredients, type]
  );
  // const arr = ingredients.filter((e) => e.type === type);

  const rootRef = document.querySelector('#obs');

  const targetRef = useRef(null);

  const isVisible = useElementOnScreen(
    {
      root: rootRef,
      rootMargin: '0px 0px',
      threshold: 0.5,
    },
    targetRef,
    handleActive,
    value
  );

  return (
    <section id={type} title={title} className={sectionStyle.ingSection}>
      <h1 className={sectionStyle.headline} ref={targetRef}>
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

Section.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
