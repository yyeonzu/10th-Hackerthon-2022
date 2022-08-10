import React, { useState } from 'react';
import styled from 'styled-components';

const ContentArea = (props) => {
  const [content, Setcontent] = useState('');

  const onSubmitContent = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
      Setcontent(e.target.value);
      props.setSubmitContent(e.target.value);
    }
  };

  return (
    <>
      <ContentBox>
        <InputContent placeholder='내용 입력' onKeyPress={onSubmitContent} />
      </ContentBox>
    </>
  );
};

export default ContentArea;

const ContentBox = styled.div`
  display: flex;
  width: 400px;
  height: 60px;
  background-color: #ffffff;
  border: solid 1px #ffffff;
  border-radius: 10px;

  padding-top: 6px;
  padding-left: 4px;
  margin-top: 12px;

  /* &:focus-within {
    border-color: #ffb800;
  } */
`;

// const InputContent = styled.textarea`
//   width: 400px;
//   height: 40px;
//   border-radius: 10px;
//   border: none;
//   outline: none;
//   resize: none;
//   font-size: 14px;
// `;

const InputContent = styled.input`
  display: block;
  width: 400px;
  height: 20px;
  border: none;
  outline: none;
  font-size: 14px;
`;
