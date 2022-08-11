import React from 'react';
import styled from 'styled-components';
import { IoIosCheckboxOutline as CheckBoxfalse } from 'react-icons/io';
import { IoIosCheckbox as CheckBoxTrue } from 'react-icons/io';
import { MdKeyboardArrowRight as ArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const LoginBox = (props) => {
  const onSubmit = () => {
    props.setIsSignup(true);
  };
  return (
    <>
      <Wrapper>
        <Form>
          <TextLarger>로그인</TextLarger>
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
        <SignUpdiv>
          아직 Pictus 회원이 아니세요?
          <SignUpButton onClick={onSubmit}>회원가입하기</SignUpButton>
        </SignUpdiv>
      </Wrapper>
    </>
  );
};

export default LoginBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 150px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const TextLarger = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 350px;
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
  width: 350px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ffb800;
  color: #ffffff;
  cursor: pointer;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const FindPW = styled.div`
  width: 350px;
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
  cursor: pointer;
`;

const SignUpdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 270px;
  margin-top: 18px;
  font-size: 14px;
  color: #747474;
`;

const SignUpButton = styled.div`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: black;
  text-decoration-line: underline;
  text-decoration-color: black;
`;
