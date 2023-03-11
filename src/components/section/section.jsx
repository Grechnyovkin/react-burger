import sectionStyle from './section.module.css';
import CardIngridient from '../card-ingridient/card-ingridient';
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

export default Section;
