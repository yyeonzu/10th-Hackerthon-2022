import React, { useState } from 'react';
import styled from 'styled-components';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { IoHeartOutline as HeartIcon } from 'react-icons/io5';
import { AiOutlineClockCircle as TimerIcon } from 'react-icons/ai';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';

const SelectedBar = (props) => {
  const [item, setItem] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

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
          <DropDownBody onClick={() => setIsSelect(!isSelect)}>
            {item ? (
              <ItemName>
                <SortBox>
                  <HeartIcon size={17} />
                  추천순으로 보기 <ArrowDownIcon size={16} />
                </SortBox>
              </ItemName>
            ) : (
              <ItemName>
                <SortBox>
                  <TimerIcon size={17} />
                  최신순으로 보기 <ArrowDownIcon size={16} />
                </SortBox>
              </ItemName>
            )}
          </DropDownBody>
          {isSelect && (
            <DropDownMenu>
              <DropDownItem
                onClick={() => {
                  setItem(false);
                  setIsSelect(false);
                }}
              >
                <TimerIcon size={17} />
                최신순으로 보기
                {/* <ArrowDownIcon size={16} /> */}
              </DropDownItem>
              <DropDownItem
                onClick={() => {
                  setItem(true);
                  setIsSelect(false);
                }}
              >
                <HeartIcon size={17} />
                추천순으로 보기
                {/* <ArrowDownIcon size={16} /> */}
              </DropDownItem>
            </DropDownMenu>
          )}
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
  font-size: 14px;
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

const DropDownBody = styled.div``;

const ItemName = styled.div``;

const DropDownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #ffffff;
  margin-top: 4px;
  position: absolute;
  z-index: 100;
  width: 160px;
  height: 70px;
  border: 1px solid #b6b4b4;
  border-radius: 10px;
  box-sizing: border-box;
  list-style: none;
  padding-left: 0;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const DropDownItem = styled.li`
  padding-top: 4px;
  margin-left: 8px;
  width: 120px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #747474;
  cursor: pointer;

  &:hover {
    color: #ffb800;
    font-weight: 400;
  }
`;
