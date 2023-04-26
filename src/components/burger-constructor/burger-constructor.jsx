import constStyle from './burger-constructor.module.css';
import { useState } from 'react';
import Modal from '../ui/modal/modal';
import OrderDatails from '../order-details/order-details';
import ConstructorList from './constructor-list';
import Order from './order';
import { resetIngredientOrder } from '../services/orderSlice';

import ConstructorBun from './constructor-bun';
import { useAppDispatch } from '../../hooks/hooks';
import { useModal } from '../../hooks/useModal';

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [orderDataDetails, setOrderDataDetails] = useState(null);

  const closeUseModal = () => {
    dispatch(resetIngredientOrder());
    closeModal();
  };

  return (
    <section id="constructor">
      <div className={`${constStyle.cards} pt-25`}>
        <div className={`${constStyle.line} pl-8 `}>
          <ConstructorBun pos={'(верх)'} accept={['bun']} index />
        </div>

        <ConstructorList accept={['sauce', 'main']} />

        <div className={`${constStyle.line} pl-8 `}>
          <ConstructorBun pos={'(низ)'} accept={['bun']} />
        </div>
      </div>
      <Order openModal={openModal} setOrderDataDetails={setOrderDataDetails} />
      {isModalOpen && (
        <Modal visible={isModalOpen} onClose={() => closeUseModal()}>
          <OrderDatails orderDataDetails={orderDataDetails} />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
