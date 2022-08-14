import React from 'react';
import styled from 'styled-components';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { VscHeart as HeartIcon } from 'react-icons/vsc';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';

const SelectedBar = (props) => {
  return (
    <>
      <Wrapper>
        <SelectedWrapper>
          {(props.camera !== '') | (props.film !== '') ? (
            <Text>검색결과</Text>
          ) : (
            <></>
          )}

          <BoxWrapper>
            {props.camera === '' ? (
              <></>
            ) : (
              <Box className='Camera'>{props.camera}</Box>
            )}

            {props.film === '' ? (
              <></>
            ) : (
              <Box className='Film'>{props.film}</Box>
            )}
          </BoxWrapper>
        </SelectedWrapper>
        <ViewSortWrapper>
          <SortBox>
            <HeartIcon size={16} />
            최신순으로 보기 <ArrowDownIcon size={16} />
          </SortBox>
        </ViewSortWrapper>
      </Wrapper>
    </>
  );
};

export default SelectedBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 18px;
  margin-bottom: 18px;
`;

const SelectedWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BoxWrapper = styled.div`
  display: flex;
  .Camera {
    background-color: #ffb800;
  }

  .Film {
    background-color: #f8b099;
  }
`;

const Text = styled.div`
  color: #747474;
  font-size: 14px;
`;

const Box = styled.div`
  width: auto;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;

  margin-left: 12px;
  padding-left: 20px;
  padding-right: 20px;

  color: #ffffff;
  font-weight: 300;
`;

const ViewSortWrapper = styled.div``;

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
