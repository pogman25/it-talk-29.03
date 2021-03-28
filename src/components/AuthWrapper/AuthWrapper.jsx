import React, { useState } from 'react';
import Modal from 'react-modal';

import { FormStyled, InputStyled, ButtonStyled } from './styled';

const customStyles = {
  overlay: {
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AuthWrapper = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      {children({ openModal: () => setIsOpen(true) })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal with fake inputs</div>
        <FormStyled onSubmit={onSubmit}>
          <InputStyled placeholder="Login" />
          <InputStyled placeholder="Password" />
          <ButtonStyled>Fake Submit</ButtonStyled>
        </FormStyled>
      </Modal>
    </>
  );
};

export default AuthWrapper;
