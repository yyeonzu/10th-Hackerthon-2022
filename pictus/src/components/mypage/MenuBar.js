import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainBorad from '../mainpage/MainBoard';
import ScrapArea from './ScrapArea';

const MenuBar = (props) => {
  const [isCheck, setIsCheck] = useState(true);

  const onCheck = () => {
    props.setIsFeed(isCheck);
    props.setIsScrap(!isCheck);
  };

  const onClick = () => {
    setIsCheck(!isCheck);
  };
  return (
    <>
      <Wrapper>
        <DivisionLine></DivisionLine>
        <ButtonWrapper>
          <MenuButton
            onClick={onClick}
            className={isCheck ? 'active' : 'false'}
          >
            피드
          </MenuButton>
          <MenuButton
            onClick={onClick}
            className={isCheck ? 'false' : 'active'}
          >
            스크랩
          </MenuButton>
        </ButtonWrapper>
        <DivisionLine></DivisionLine>
      </Wrapper>
      {isCheck ? <MainBorad /> : <ScrapArea />}
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

const ButtonWrapper = styled.div`
  display: flex;

  .active {
    border-bottom: 2px solid #ffb800;
    color: #ffb800;
  }

  .false {
    border-bottom: transparent;
  }
`;

const MenuButton = styled.button`
  border: transparent;
  background-color: transparent;
  font-size: 24px;
  font-weight: 600;

  margin-left: 12px;
  margin-right: 12px;

  cursor: pointer;
`;
