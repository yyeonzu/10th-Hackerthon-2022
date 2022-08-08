import React from 'react';
import styled from 'styled-components';
import { IoIosCheckboxOutline as CheckBoxfalse } from 'react-icons/io';
import { IoIosCheckbox as CheckBoxTrue } from 'react-icons/io';
import { MdKeyboardArrowRight as ArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const LoginBox = () => {
  return (
    <>
      <Wrapper>
        <Form>
          <TextLarge>이메일</TextLarge>
          <Input placeholder='아이디를 입력하세요' type='text'></Input>
          <TextLarge>비밀번호</TextLarge>
          <Input placeholder='비밀번호를 입력하세요' type='password'></Input>
          <LoginButton type='submit'>로그인</LoginButton>
          <FindPW>
            <BoxWrapper>
              <CheckBox />
              <TextSmall>로그인 유지</TextSmall>
            </BoxWrapper>
            <BoxWrapper>
              <TextSmall>비밀번호 찾기</TextSmall>
              <ArrowRight cursor='pointer' color='#747474' />
            </BoxWrapper>
          </FindPW>
        </Form>
        <NavLink to='/signup'>
          <SignUpButton>회원가입버튼임</SignUpButton>
        </NavLink>
      </Wrapper>
    </>
  );
};

export default LoginBox;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: solid;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #747474;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
`;

const TextLarge = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #5f2d9a;
  color: #ffffff;

  margin-top: 24px;
  margin-bottom: 8px;
`;

const FindPW = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.button`
  border: 1px solid #747474;
  border-radius: 5px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin-right: 6px;
`;

const TextSmall = styled.span`
  font-weight: 300;
  font-size: 15px;
  line-height: 29px;
  color: #747474;
`;

const SignUpButton = styled.button`
  border: solid 1px black;
`;
