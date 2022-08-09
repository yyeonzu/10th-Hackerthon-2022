import React, { useState } from 'react';
import styled from 'styled-components';
import ModalSelect from '../selectbox/ModalSelect';
import SelectC from '../selectbox/SelectC';
import SelectF from '../selectbox/SelectF';
import { IoIosArrowDown as ArrowDownIcon } from 'react-icons/io';

const SelectHeader = () => {
  const [isModalC, setIsModalC] = useState(false);
  const [isModalF, setIsModalF] = useState(false);
  const [submitC, setSubmitC] = useState('');
  const [submitF, setSubmitF] = useState('');

  const handleModalC = () => {
    setIsModalC(!isModalC);

    document.body.style.overflow = 'unset';
  };

  const handleModalF = () => {
    setIsModalF(!isModalF);

    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Wrapper>
        <TextLarge>원하는 필름을 검색해보세요!</TextLarge>
        <SelectBoxWrapper>
          <CameraWrapper onClick={handleModalC}>
            <SelectCamera>
              {submitC === '' ? '카메라를 선택하세요' : submitC}
            </SelectCamera>
            <ArrowDownIcon color='#B6B4B4' cursor='pointer' size={20} />
          </CameraWrapper>
          <FilmWrapper onClick={handleModalF}>
            <SelectFilm>
              {submitF === '' ? '필름을 선택하세요' : submitF}
            </SelectFilm>
            <ArrowDownIcon color='#B6B4B4' cursor='pointer' size={20} />
          </FilmWrapper>
          <SelectButton>검색</SelectButton>
        </SelectBoxWrapper>
      </Wrapper>
      {isModalC && (
        <ModalSelect handleModal={handleModalC}>
          <SelectC
            submitC={submitC}
            setSubmitC={setSubmitC}
            handleModalC={handleModalC}
          />
        </ModalSelect>
      )}
      {isModalF && (
        <ModalSelect handleModal={handleModalF}>
          <SelectF
            submitF={submitF}
            setSubmitF={setSubmitF}
            handleModalF={handleModalF}
          />
        </ModalSelect>
      )}
    </>
  );
};

export default SelectHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 184, 0, 0.15);

  margin-left: 50px;
  margin-right: 50px;
`;

const TextLarge = styled.div`
  width: 200px;
  font-size: 32px;
  font-weight: 600;
  color: #ffb800;

  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  width: 800px;
  justify-content: space-between;
  align-items: center;

  margin-left: 90px;

  @media (min-width: 1660px) {
    margin-left: 350px;
  }
`;

const CameraWrapper = styled.div`
  width: 380px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: solid 1px #ffb800;
  border-left: solid 1px #ffb800;
  border-bottom: solid 1px #ffb800;
  border-right: solid 1px #d9d9d9;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
`;
const SelectCamera = styled.div``;

const FilmWrapper = styled.div`
  width: 380px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: solid 1px #ffb800;
  border-left: solid 1px #d9d9d9;
  border-bottom: solid 1px #ffb800;
  border-right: solid 1px #ffb800;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
`;

const SelectFilm = styled.div``;

const SelectButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #ffb800;
  cursor: pointer;

  margin-left: 20px;
`;
