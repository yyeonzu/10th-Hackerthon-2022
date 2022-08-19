import React from 'react';
import styled from 'styled-components';
import { IoHeartOutline as HeartIcon } from 'react-icons/io5';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';

const SortView = () => {
  return (
    <>
      <Wrapper>
        <SortBox>
          <HeartIcon size={16} />
          최신순으로 보기 <ArrowDownIcon size={16} />
        </SortBox>
      </Wrapper>
    </>
  );
};

export default SortView;

const Wrapper = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 18px;
  margin-bottom: 18px;
  display: flex;
  justify-content: flex-end;
`;

const SortBox = styled.button`
  width: 160px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #b6b4b4;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #747474;
  cursor: pointer;
  &:hover {
    color: #ffb800;
    border: 1px solid #ffb800;
  }
`;
