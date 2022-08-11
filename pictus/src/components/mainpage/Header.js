import React, { useState } from 'react';
import styled from 'styled-components';
import { TbSearch as SearchIcon } from 'react-icons/tb';
import { BsBell as AlarmIcon } from 'react-icons/bs';
import { ReactComponent as Logo } from '../../static/logo.svg';
import { NavLink } from 'react-router-dom';
import Upload from '../uploadpost/Upload';
import ModalUpload from '../uploadpost/ModalUpload';

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);

    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <NavLink to='/'>
            <LogoButton>
              <Logo />
            </LogoButton>
          </NavLink>
        </LogoWrapper>
        <OthersWrapper>
          <SearchBarWrapper>
            <>
              <SearchButton type='submit'>
                <SearchIcon size='18' />
              </SearchButton>
              <SearchInput autoFocus placeholder='태그 검색' type='text' />
            </>
          </SearchBarWrapper>
          <UploadButton onClick={handleModal}>업로드</UploadButton>
          <AlarmButton>
            <AlarmIcon size='32' />
          </AlarmButton>
          <NavLink to='/mypage'>
            <MyPageButton></MyPageButton>
          </NavLink>
          {/* <NavLink to='/signin'>
            <LoginButton>로그인</LoginButton>
          </NavLink> */}
        </OthersWrapper>
      </Wrapper>
      {isModal && (
        <ModalUpload handleModal={handleModal}>
          <Upload />
        </ModalUpload>
      )}
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: 50px;
  margin-right: 50px;
`;

const LogoWrapper = styled.div``;

const LogoButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const OthersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  //border: solid;
`;

const SearchBarWrapper = styled.div`
  width: 160px;
  height: 35px;
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
`;

const SearchForm = styled.form``;

const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  align-items: center;
  color: #747474;
  &:hover {
    color: #ffb800;
  }
  &:active {
    color: #ffb800;
  }
  margin-left: 4px;
`;

const SearchInput = styled.input`
  width: 120px;
  border: none;
  background-color: transparent;
  outline: none; // focus했을 때 테두리 없앰
`;

const UploadButton = styled.button`
  cursor: pointer;
  width: 110px;
  height: 35px;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
  background-color: transparent;
  color: #747474;
  &:hover {
    color: #ffb800;
    border: solid 1px #ffb800;
  }
  &:active {
    color: #ffb800;
    border: solid 1px #ffb800;
  }
`;

const AlarmButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  align-items: center;
  color: #747474;
  &:hover {
    color: #ffb800;
  }
  &:active {
    color: #ffb800;
  }
`;

const MyPageButton = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: solid 1px #d9d9d9;
  border-radius: 50%;

  &:hover {
    border: solid 1px #ffb800;
  }
  &:active {
    border: solid 1px #ffb800;
  }
`;

const LoginButton = styled.button`
  cursor: pointer;
  width: 110px;
  height: 35px;
  border: solid 1px #d9d9d9;
  border-radius: 4px;
  background-color: transparent;
  color: #747474;
  &:hover {
    color: #ffb800;
    border: solid 1px #ffb800;
  }
  &:active {
    color: #ffb800;
    border: solid 1px #ffb800;
  }
`;

const ModalContent = styled.div`
  position: fixed;
  display: flex;
  margin: 0 auto;
  width: 80%;

  background-color: #747474;
`;
