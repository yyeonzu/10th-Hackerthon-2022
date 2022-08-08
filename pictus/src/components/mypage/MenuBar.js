import React from 'react';
import styled from 'styled-components';

const MenuBar = () => {
  return (
    <>
      <Wrapper>
        <DivisionLine></DivisionLine>
        <MenuButton>피드</MenuButton>
        <MenuButton>스크랩</MenuButton>
        <DivisionLine></DivisionLine>
      </Wrapper>
    </>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const DivisionLine = styled.div`
  border-top: 1px solid #cccccc;
  margin-top: 6px;
  width: 40%;
`;

const MenuButton = styled.button`
  border: transparent;
  background-color: transparent;
  font-size: 24px;
  font-weight: 600;

  margin-left: 12px;
  margin-right: 12px;

  cursor: pointer;
  &:focus {
    color: #ffb800;
    border-bottom: 2px solid #ffb800;
  }
`;
