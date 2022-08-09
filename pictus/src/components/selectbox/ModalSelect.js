import React from 'react';
import styled from 'styled-components';
import { IoMdClose as CloseIcon } from 'react-icons/io';

const ModalSelect = ({ handleModal, children, ...rest }) => {
  document.body.style.overflow = 'hidden';
  return (
    <Container>
      <Background onClick={handleModal} />
      <ModalBlock {...rest}>
        <CloseButton onClick={handleModal}>
          <CloseIcon size={30} />
        </CloseButton>
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};

export default ModalSelect;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(2px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 3.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: #ffffff;
  width: 400px;
  margin: 0 auto;
  /* @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  } */
  height: 700px;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const CloseButton = styled.div`
  border: none;
  background-color: transparent;
  color: #b6b4b4;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
