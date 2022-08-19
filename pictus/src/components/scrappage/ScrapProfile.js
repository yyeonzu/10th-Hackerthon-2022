import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Profile from './width11.jpg';

const ScrapProfile = () => {
  return (
    <>
      <Wrapper>
        <ProfileCover>
          <img src='./width11.jpg' />
          {/* <Profile /> */}
        </ProfileCover>
        <ProfileContent>
          <Title>캘리포니아</Title>
          <DivisionLine></DivisionLine>
          <Sub>캘리포니아 추억 여행기</Sub>
          <MemberWrapper>
            Contributors:
            <MemberContainer>@yyeonzu @dayun @yisu @yumi</MemberContainer>
          </MemberWrapper>
        </ProfileContent>
      </Wrapper>
    </>
  );
};

export default ScrapProfile;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`;

const ProfileCover = styled.div`
  width: 200px;
  height: 200px;

  margin-right: 40px;
  margin-left: 20px;
  margin-top: 16px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  justify-content: center;
`;

const DivisionLine = styled.div`
  border-top: 1px solid #cccccc;
  margin-top: 6px;
  width: 400px;
  padding: 4px;
`;

const Title = styled.div`
  font-size: 28px;
  padding-bottom: 4px;
`;

const Sub = styled.div`
  font-size: 20px;
  color: #626262;
`;

const MemberWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 40px;
  border-radius: 10px;
  background-color: #f3f3f3;
  font-weight: 600;
  align-items: center;
  margin-top: 18px;
  padding-left: 8px;
`;

const MemberContainer = styled.div`
  margin-left: 8px;
  color: #4a88f1;

  font-weight: 400;
`;
