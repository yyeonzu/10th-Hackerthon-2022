import React from 'react';
import styled from 'styled-components';

const SignUpBox = () => {
  return (
    <>
      <Wrapper>
        <Form>
          <TextLarge>사용자 이름</TextLarge>
          <Input placeholder='닉네임을 입력해주세요' type='text'></Input>
          <TextLarge>이메일</TextLarge>
          <Input
            placeholder='이메일을 형식에 맞춰 입력해주세요'
            type='text'
          ></Input>
          <TextLarge>비밀번호</TextLarge>
          <Input placeholder='6자 이상' type='password'></Input>
          <TextLarge>비밀번호 확인</TextLarge>
          <Input placeholder='다시 한 번 입력하세요' type='password'></Input>
        </Form>
      </Wrapper>
    </>
  );
};

export default SignUpBox;

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
  border: solid 1px #747474;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  outline: none;
`;

const TextLarge = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 40px;
`;
