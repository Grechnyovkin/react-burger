import ModalOverlay from '../modal-overlay/modal-overlay';
import cls from './modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal');
const esc = 27;

const Modal = (props) => {
  const { children, onClose, title } = props;
  const element = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(element);

    return () => {
      modalRoot.removeChild(element);
    };
  });

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === esc) {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={cls.modal_card} onClick={(e) => e.stopPropagation()}>
        <div className={`${cls.title}`}>
          <span>{title}</span>
          <div className={`${cls.close}`} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>

        {children}
      </div>
    </ModalOverlay>,
    element
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;
