import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../static/logo.svg';

const SignUpBox = (props) => {
  const onBackClick = () => {
    props.setIsSignup(false);
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [matchFocus, setMatchFocus] = useState(false);

  const RegExp = (str, type) => {
    let REGEX = {
      USERNAME: /^[가-힣a-zA-Z]{2,8}$/,
      EMAIL:
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      PASSWORD: /^(?=.*[a-zA-Z])((?=.*\d)).{8,16}$/,
    };

    switch (type) {
      case 'username':
        return REGEX.USERNAME.test(str);
      case 'email':
        return REGEX.EMAIL.test(str);
      case 'password':
        return REGEX.PASSWORD.test(str);
      default:
        return false;
    }
  };

  // boolean으로 유효성 검사
  let validUsername = RegExp(username, 'username');
  let validEmail = RegExp(email, 'email');
  let validPwd = RegExp(pwd, 'password');

  if (matchFocus) {
    var validMatch = false;
    pwd != '' && pwd == matchPwd ? (validMatch = true) : (validMatch = false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validUsername && validEmail && validPwd && validMatch) {
      alert(username + '\n' + email + '\n' + pwd);
      onBackClick();
      const data = {
        username: username,
        email: email,
        password: pwd,
      };
      axios.post('url', data).then(() => {});
    } else {
      alert('회원 정보를 다시 확인해주세요');
    }
    setUsername('');
    setEmail('');
    setPwd('');
    setMatchPwd('');
    setMatchFocus(false);
  };

  return (
    <>
      <Wrapper>
        <BoxWrapper>
          <TextLarger>회원가입</TextLarger>
          {/* username 영역 */}
          <label htmlFor='username'>
            <TextLarge>사용자 이름</TextLarge>
            {validUsername ? (
              <Valid>사용 가능한 닉네임입니다</Valid>
            ) : (
              <Invalid> 2~6자리 한글, 영어</Invalid>
            )}
          </label>
          <Input
            name='username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
            placeholder='한글, 영어 2~6자리'
          />

          {/* email 영역 */}
          <label htmlFor='email'>
            <TextLarge>이메일</TextLarge>
            {validEmail ? (
              <Valid>사용 가능한 이메일입니다</Valid>
            ) : (
              <Invalid>이메일 형식으로 입력</Invalid>
            )}
          </label>
          <Input
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='off'
            placeholder='이메일 주소'
          />

          {/* password 영역 */}
          <label htmlFor='pwd'>
            <TextLarge>비밀번호</TextLarge>
            {validPwd ? (
              <Valid>사용 가능한 비밀번호입니다</Valid>
            ) : (
              <Invalid>8~16자리 숫자, 영문자 조합</Invalid>
            )}
          </label>
          <Input
            name='password'
            type='password'
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            autoComplete='off'
            placeholder='숫자, 영어 포함 8~16자리'
          />

          {/* match password 영역 */}
          <label htmlFor='checkPassword'>
            <TextLarge>비밀번호 확인</TextLarge>
            {matchFocus &&
              (validMatch ? (
                <Valid>비밀번호가 일치합니다</Valid>
              ) : (
                <Invalid>비밀번호가 일치하지 않습니다</Invalid>
              ))}
          </label>

          <Input
            name='checkPassword'
            type='password'
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            placeholder='다시 한 번 입력'
          />
          <ButtonWrapper>
            <BackButton onClick={onBackClick}>이전</BackButton>
            <SubmitButton onClick={handleSubmit}>회원가입</SubmitButton>
          </ButtonWrapper>
        </BoxWrapper>
      </Wrapper>
    </>
  );
};

export default SignUpBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

const TextLarger = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Input = styled.input`
  border: solid 1px #747474;
  border-radius: 10px;
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  outline: none;
`;

const TextLarge = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 40px;
  margin-top: 30px;
`;

const BackButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #ffb800;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
`;

const Valid = styled.span`
  color: green;
  margin-left: 10px;
  font-size: 12px;
  text-align: center;
`;

const Invalid = styled.span`
  color: red;
  margin-left: 10px;
  font-size: 12px;
  text-align: center;
`;
