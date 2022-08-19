import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Image from '../../static/example.png';
import { RiSettings4Fill as SettingIcon } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const getProfile = async () => {
    await axios
      .get(`https://jain5379.pythonanywhere.com/users/profile/`)
      .then((response) => {
        // console.log(response.data[4]);
        setProfile(response.data[4]);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={Image} />
      </ImageWrapper>
      <ContentWrapper>
        <NameArea>{profile.nickname}</NameArea>
        <div>
          <IDArea>abc0816@naver.com</IDArea>
          <URLArea
            rel='external'
            target='_blank'
            href='https://www.instagram.com/lityeonzu/'
          >
            www.instagram.com/lityeonzu/
          </URLArea>
        </div>
        <Settings>
          <Button>프로필 편집</Button>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            로그아웃
          </Button>
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
  font-size: 22px;
  font-weight: 300;
  color: #b6b4b4;
`;

const URLArea = styled.a`
  font-size: 20px;
  font-weight: 300;
  color: #2b8afa;
`;

const Settings = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  // width: 100px;
  display: inline-block;
  height: 35px;
  background-color: #ededed;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 16px;
`;
