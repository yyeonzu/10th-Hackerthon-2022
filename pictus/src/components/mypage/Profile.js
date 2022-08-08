import React from 'react';
import styled from 'styled-components';
import Image from '../../static/example.png';
import { RiSettings4Fill as SettingIcon } from 'react-icons/ri';

const Profile = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={Image} />
      </ImageWrapper>
      <ContentWrapper>
        <NameArea>닉네임</NameArea>
        <div>
          <IDArea>@아이디</IDArea>
          <URLArea>http://url</URLArea>
        </div>
        <Settings>
          <Button>프로필 편집</Button>
          <SettingIcon color='#eeeeee' size={36} cursor='pointer' />
        </Settings>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

const ImageWrapper = styled.div`
  margin-right: 50px;
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
`;

const ContentWrapper = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const NameArea = styled.div`
  font-size: 28px;
  font-weight: 600;
  border-bottom: 2px solid #ededed;

  padding-bottom: 8px;
`;

const IDArea = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #b6b4b4;
`;

const URLArea = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #2b8afa;
`;

const Settings = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  background-color: #ededed;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 16px;
`;
