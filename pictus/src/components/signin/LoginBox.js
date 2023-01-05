import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { IoIosCheckboxOutline as CheckBoxfalse } from 'react-icons/io';
import { IoIosCheckbox as CheckBoxTrue } from 'react-icons/io';
import { MdKeyboardArrowRight as ArrowRight } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginAPI from '../../api/user';

const LoginBox = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // 회원가입으로 이동
  const onChange = () => {
    props.setIsSignup(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('https://localhost/login/', {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.message === '로그인 성공') {
          console.log(response.data.data.email); // 1234@naver.com 으로 아주 잘 나옴
          alert('로그인 성공');
          navigate('/mainpage');
        }
      })
      .catch((error) => {
        alert('실패');
      });

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Wrapper>
        <Form>
          <TextLarger>로그인</TextLarger>
          <TextLarge>이메일</TextLarge>

          <Input
            name='email'
            value={email}
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='off'
            placeholder='아이디를 입력하세요'
          ></Input>
          <TextLarge>비밀번호</TextLarge>
          <Input
            name='password'
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
            placeholder='비밀번호를 입력하세요'
          ></Input>
          <LoginButton onClick={onSubmit}>로그인</LoginButton>
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
          <SignUpButton type='submit' onClick={onChange}>
            회원가입하기
          </SignUpButton>
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
