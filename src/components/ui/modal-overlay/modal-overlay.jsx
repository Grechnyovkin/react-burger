import { useEffect } from 'react';
import cls from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  const { children, onClose } = props;

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [props]);

  return (
    <div className={cls.modal_background} onClick={onClose}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
