import React from 'react';
import { SubmitButton } from 'components/atoms/SubmitButton/SubmitButton';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{ overlay: { zIndex: 1000, backgroundColor: 'rgba(215, 222, 221, 0.75)' } }}
    >
      {children}
      <SubmitButton onClick={handleClose}>Close details</SubmitButton>
    </ModalWrapper>
  );
};

export default Modal;
