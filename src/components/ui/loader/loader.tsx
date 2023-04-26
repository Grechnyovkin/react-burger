import cl from './loader.module.css';

const Loader = () => {
  return (
    <div className={cl.overlay}>
      <div className={cl.loader}></div>;
    </div>
  );
};

export default Loader;
