import ModalOverlay from '../modal-overlay/modal-overlay';
import cls from './modal.module.css';
import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal');

const Modal = (props) => {
  const { children, visible, onClose, title } = props;
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (visible) {
      modalRoot.appendChild(element);

      return () => {
        modalRoot.removeChild(element);
      };
    }
  });

  if (visible) {
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
  }
  return null;
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;
